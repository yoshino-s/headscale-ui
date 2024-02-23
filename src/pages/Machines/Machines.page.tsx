import { useCallback, useEffect, useState } from 'react';

import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Input,
  Select,
  Skeleton,
  Stack,
  Switch,
  Table,
  TagsInput,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

import {
  IconEdit,
  IconPlus,
  IconRouter,
  IconTrash,
  IconWifi,
  IconWifiOff,
} from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  V1Machine,
  headscaleServiceDeleteMachine,
  headscaleServiceExpireMachine,
  headscaleServiceListMachines,
  headscaleServiceListUsers,
  headscaleServiceRenameMachine,
  headscaleServiceSetTags,
} from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

export default function MachinesPage() {
  const params = useParams();
  const user = params.user ?? 'All';
  const navigate = useNavigate();

  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Machines',
      description: `Manage machines${user === 'All' ? '' : ` for ${user}`}`,
    });
  }, [setMeta]);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectMachine, setSelectMachine] = useState<V1Machine | null>(null);

  const form = useForm({
    initialValues: {
      givenName: '',
      forcedTags: [] as string[],
    },
  });

  useEffect(() => {
    if (selectMachine) {
      form.setValues({
        givenName: selectMachine.givenName,
        forcedTags:
          selectMachine.forcedTags?.map((n) => n.slice('tag:'.length)) ?? [],
      });
    }
  }, [selectMachine]);

  const filterForm = useForm({
    initialValues: {
      user: '',
      showOffline: false,
    },
  });

  useEffect(() => {
    filterForm.setFieldValue('user', user);
  }, [user]);

  useEffect(() => {
    const filterUser = filterForm.values.user;
    if (filterUser) {
      let url = '';
      if (filterUser === 'All') {
        url = '/machines';
      } else {
        url = `/machines/${filterUser}`;
      }
      navigate(url, { replace: true });
    }
  }, [filterForm.values.user]);

  const {
    data: allMachines,
    isLoading: isLoadingMachines,
    mutate,
  } = useSwrQuery(headscaleServiceListMachines, {
    user: filterForm.values.user === 'All' ? undefined : filterForm.values.user,
  });

  const { data: users } = useSwrQuery(headscaleServiceListUsers);

  const openDeleteConfirmation = useCallback(
    (deleteMachine: V1Machine) =>
      modals.openConfirmModal({
        title: 'Delete machine',
        children: (
          <Text>
            Are you sure you want to delete machine{' '}
            <Text w={500} c="red" display="inline">
              {deleteMachine?.givenName}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceDeleteMachine, deleteMachine.id!);
          mutate();
        },
      }),
    [],
  );

  const expire = useCallback(async () => {
    if (selectMachine) {
      await callQuery(headscaleServiceExpireMachine, selectMachine.id!);
    }
    mutate();
    close();
  }, [selectMachine]);

  const submit = useCallback(
    async (values: (typeof form)['values']) => {
      if (selectMachine) {
        if (values.givenName !== selectMachine.givenName) {
          await callQuery(
            headscaleServiceRenameMachine,
            selectMachine.id!,
            values.givenName,
          );
        }
        if (
          JSON.stringify(values.forcedTags) !==
          JSON.stringify(
            selectMachine.forcedTags?.map((n) => n.slice('tag:'.length)) ?? [],
          )
        ) {
          await callQuery(headscaleServiceSetTags, selectMachine.id!, {
            tags: values.forcedTags.map((tag) => `tag:${tag}`),
          });
        }
      }
      mutate();
      close();
    },
    [selectMachine],
  );

  let machines = allMachines;
  if (machines && !filterForm.values.showOffline) {
    machines = {
      machines: machines.machines?.filter((machine) => machine.online) ?? [],
    };
  }

  return (
    <>
      <Drawer
        offset={8}
        position="right"
        radius="md"
        opened={opened}
        onClose={close}
        title={
          <Group>
            Machine
            {selectMachine?.online ? (
              <IconWifi color="green" />
            ) : (
              <IconWifiOff color="red" />
            )}
          </Group>
        }
      >
        <form onSubmit={form.onSubmit(submit)}>
          <Stack
            style={{
              lineBreak: 'anywhere',
            }}
          >
            {selectMachine && (
              <>
                <Input.Wrapper label="ID">
                  <Text>{selectMachine.id}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Name">
                  <Text>{selectMachine.name}</Text>
                </Input.Wrapper>
                <Divider />
              </>
            )}
            <TextInput
              label="Given Name"
              placeholder="givenName"
              {...form.getInputProps('givenName')}
            />
            <TagsInput
              label="Tags"
              placeholder="forcedTags"
              {...form.getInputProps('forcedTags')}
            />
            <Group>
              <Button flex="1" color="red" onClick={expire}>
                Expire
              </Button>
              <Button type="submit" flex="1">
                Save
              </Button>
            </Group>
            {selectMachine && (
              <>
                <Divider />

                <Input.Wrapper label="Machine Key">
                  <Text>{selectMachine.machineKey}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Node Key">
                  <Text>{selectMachine.nodeKey}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Disco Key">
                  <Text>{selectMachine.discoKey}</Text>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="Invalid Tags">
                  <Group>
                    {selectMachine.invalidTags?.map((tag) => (
                      <Badge key={tag} color="blue" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>
                <Input.Wrapper label="Valid Tags">
                  <Group>
                    {selectMachine.validTags?.map((tag) => (
                      <Badge key={tag} color="blue" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="IP Address">
                  <Group>
                    {selectMachine.ipAddresses?.map((ip) => (
                      <Badge key={ip} color="blue" size="md">
                        {ip}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="User">
                  <Text>{selectMachine.user?.name}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Register Method">
                  <Text>{selectMachine.registerMethod}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Pre Auth Key">
                  <Text>{selectMachine.preAuthKey?.key ?? 'N/A'}</Text>
                </Input.Wrapper>
                <Divider />
                <Input.Wrapper label="Last Seen">
                  <Text>
                    {selectMachine.lastSeen
                      ? new Date(selectMachine.lastSeen).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
                <Input.Wrapper label="Last Successful Update">
                  <Text>
                    {selectMachine.lastSuccessfulUpdate
                      ? new Date(
                          selectMachine.lastSuccessfulUpdate,
                        ).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
                <Input.Wrapper label="Expiry">
                  <Text>
                    {selectMachine.expiry
                      ? new Date(selectMachine.expiry).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
                <Input.Wrapper label="Created At">
                  <Text>
                    {selectMachine.createdAt
                      ? new Date(selectMachine.createdAt).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
              </>
            )}
          </Stack>
        </form>
      </Drawer>

      <Container
        flex={1}
        w="100%"
        style={{
          overflow: 'auto',
        }}
      >
        <Skeleton visible={isLoadingMachines} height={rem(240)}>
          <Stack my="md">
            <Select
              label="Filter By User"
              placeholder="Pick user"
              data={['All', ...(users?.users?.map((user) => user.name!) ?? [])]}
              {...filterForm.getInputProps('user')}
            />
            <Switch
              label="Show Offline"
              {...filterForm.getInputProps('showOffline')}
            />
          </Stack>
          <Table captionSide="bottom">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Given Name</Table.Th>
                <Table.Th>IP Address</Table.Th>
                <Table.Th>Tags</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {machines?.machines
                ?.toSorted((a, b) => parseInt(a.id!) - parseInt(b.id!))
                ?.map((machine) => (
                  <Table.Tr key={machine.id}>
                    <Table.Td>
                      <Group>
                        <div>{machine.id}</div>
                        {machine?.online ? (
                          <IconWifi color="green" />
                        ) : (
                          <IconWifiOff color="red" />
                        )}
                      </Group>
                    </Table.Td>
                    <Table.Td>{machine.givenName}</Table.Td>
                    <Table.Td>{machine.ipAddresses?.join(' / ')}</Table.Td>
                    <Table.Td>
                      <Group>
                        {machine.forcedTags?.map((tag) => (
                          <Badge key={tag} color="blue" size="xs">
                            {tag}
                          </Badge>
                        ))}
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Group>
                        <ActionIcon
                          title="More"
                          variant="light"
                          onClick={() => {
                            setSelectMachine(machine);
                            open();
                          }}
                        >
                          <IconEdit />
                        </ActionIcon>
                        <ActionIcon
                          title="Delete"
                          color="red"
                          variant="light"
                          onClick={() => openDeleteConfirmation(machine)}
                        >
                          <IconTrash />
                        </ActionIcon>
                        <ActionIcon
                          title="More"
                          variant="light"
                          component={Link}
                          to={`/routes/${machine.id}`}
                        >
                          <IconRouter />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              <Table.Tr>
                <Table.Td colSpan={4}></Table.Td>
                <Table.Td>{machines?.machines?.length} machines</Table.Td>
              </Table.Tr>
            </Table.Tbody>
            <Table.Caption>
              <ActionIcon
                title="Add"
                variant="filled"
                onClick={() => {
                  setSelectMachine(null);
                  open();
                }}
              >
                <IconPlus />
              </ActionIcon>
            </Table.Caption>
          </Table>
        </Skeleton>
      </Container>
    </>
  );
}
