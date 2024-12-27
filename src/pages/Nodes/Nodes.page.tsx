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
  V1Node,
  headscaleServiceDeleteNode,
  headscaleServiceExpireNode,
  headscaleServiceListNodes,
  headscaleServiceListUsers,
  headscaleServiceRenameNode,
  headscaleServiceSetTags,
} from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

export default function NodesPage() {
  const params = useParams();
  const user = params.user ?? 'All';
  const navigate = useNavigate();

  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Nodes',
      description: `Manage machine${user === 'All' ? '' : ` for ${user}`}`,
    });
  }, [setMeta]);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectNode, setSelectNode] = useState<V1Node | null>(null);

  const form = useForm({
    initialValues: {
      givenName: '',
      forcedTags: [] as string[],
    },
  });

  useEffect(() => {
    if (selectNode) {
      form.setValues({
        givenName: selectNode.givenName,
        forcedTags:
          selectNode.forcedTags?.map((n) => n.slice('tag:'.length)) ?? [],
      });
    }
  }, [selectNode]);

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
        url = '/machine';
      } else {
        url = `/machine/${filterUser}`;
      }
      navigate(url, { replace: true });
    }
  }, [filterForm.values.user]);

  const {
    data: allNodes,
    isLoading: isLoadingNodes,
    mutate,
  } = useSwrQuery(headscaleServiceListNodes, {
    user: filterForm.values.user === 'All' ? undefined : filterForm.values.user,
  });

  const { data: users } = useSwrQuery(headscaleServiceListUsers);

  const openDeleteConfirmation = useCallback(
    (deleteNode: V1Node) =>
      modals.openConfirmModal({
        title: 'Delete machine',
        children: (
          <Text>
            Are you sure you want to delete machine{' '}
            <Text w={500} c="red" display="inline">
              {deleteNode?.givenName}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceDeleteNode, deleteNode.id!);
          mutate();
        },
      }),
    [],
  );

  const expire = useCallback(async () => {
    if (selectNode) {
      await callQuery(headscaleServiceExpireNode, selectNode.id!);
    }
    mutate();
    close();
  }, [selectNode]);

  const submit = useCallback(
    async (values: (typeof form)['values']) => {
      if (selectNode) {
        if (values.givenName !== selectNode.givenName) {
          await callQuery(
            headscaleServiceRenameNode,
            selectNode.id!,
            values.givenName,
          );
        }
        if (
          JSON.stringify(values.forcedTags) !==
          JSON.stringify(
            selectNode.forcedTags?.map((n) => n.slice('tag:'.length)) ?? [],
          )
        ) {
          await callQuery(headscaleServiceSetTags, selectNode.id!, {
            tags: values.forcedTags.map((tag) => `tag:${tag}`),
          });
        }
      }
      mutate();
      close();
    },
    [selectNode],
  );

  let nodes = allNodes;
  if (nodes && !filterForm.values.showOffline) {
    nodes = {
      nodes: nodes.nodes?.filter((node) => node.online) ?? [],
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
            Node
            {selectNode?.online ? (
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
            {selectNode && (
              <>
                <Input.Wrapper label="ID">
                  <Text>{selectNode.id}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Name">
                  <Text>{selectNode.name}</Text>
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
            {selectNode && (
              <>
                <Divider />

                <Input.Wrapper label="Node Key">
                  <Text>{selectNode.machineKey}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Node Key">
                  <Text>{selectNode.nodeKey}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Disco Key">
                  <Text>{selectNode.discoKey}</Text>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="Invalid Tags">
                  <Group>
                    {selectNode.invalidTags?.map((tag) => (
                      <Badge key={tag} color="blue" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>
                <Input.Wrapper label="Valid Tags">
                  <Group>
                    {selectNode.validTags?.map((tag) => (
                      <Badge key={tag} color="blue" size="md">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="IP Address">
                  <Group>
                    {selectNode.ipAddresses?.map((ip) => (
                      <Badge key={ip} color="blue" size="md">
                        {ip}
                      </Badge>
                    ))}
                  </Group>
                </Input.Wrapper>

                <Divider />

                <Input.Wrapper label="User">
                  <Text>{selectNode.user?.name}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Register Method">
                  <Text>{selectNode.registerMethod}</Text>
                </Input.Wrapper>
                <Input.Wrapper label="Pre Auth Key">
                  <Text>{selectNode.preAuthKey?.key ?? 'N/A'}</Text>
                </Input.Wrapper>
                <Divider />
                <Input.Wrapper label="Last Seen">
                  <Text>
                    {selectNode.lastSeen
                      ? new Date(selectNode.lastSeen).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
                <Input.Wrapper label="Expiry">
                  <Text>
                    {selectNode.expiry
                      ? new Date(selectNode.expiry).toLocaleString()
                      : ''}
                  </Text>
                </Input.Wrapper>
                <Input.Wrapper label="Created At">
                  <Text>
                    {selectNode.createdAt
                      ? new Date(selectNode.createdAt).toLocaleString()
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
        <Skeleton visible={isLoadingNodes} height={rem(240)}>
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
              {nodes?.nodes
                ?.toSorted((a, b) => parseInt(a.id!) - parseInt(b.id!))
                ?.map((node) => (
                  <Table.Tr key={node.id}>
                    <Table.Td>
                      <Group>
                        <div>{node.id}</div>
                        {node?.online ? (
                          <IconWifi color="green" />
                        ) : (
                          <IconWifiOff color="red" />
                        )}
                      </Group>
                    </Table.Td>
                    <Table.Td>{node.givenName}</Table.Td>
                    <Table.Td>{node.ipAddresses?.join(' / ')}</Table.Td>
                    <Table.Td>
                      <Group>
                        {node.forcedTags?.map((tag) => (
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
                            setSelectNode(node);
                            open();
                          }}
                        >
                          <IconEdit />
                        </ActionIcon>
                        <ActionIcon
                          title="Delete"
                          color="red"
                          variant="light"
                          onClick={() => openDeleteConfirmation(node)}
                        >
                          <IconTrash />
                        </ActionIcon>
                        <ActionIcon
                          title="More"
                          variant="light"
                          component={Link}
                          to={`/routes/${node.id}`}
                        >
                          <IconRouter />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              <Table.Tr>
                <Table.Td colSpan={4}></Table.Td>
                <Table.Td>{nodes?.nodes?.length} nodes</Table.Td>
              </Table.Tr>
            </Table.Tbody>
            <Table.Caption>
              <ActionIcon
                title="Add"
                variant="filled"
                onClick={() => {
                  setSelectNode(null);
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
