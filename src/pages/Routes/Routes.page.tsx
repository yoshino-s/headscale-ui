import { useCallback, useEffect, useState } from 'react';

import {
  ActionIcon,
  Badge,
  Box,
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
  Text,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  V1Route,
  headscaleServiceDeleteMachine,
  headscaleServiceDisableRoute,
  headscaleServiceEnableRoute,
  headscaleServiceListMachines,
} from '@/request';
import { headscaleServiceListRoutes } from '@/request/api/headscaleServiceListRoutes';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

function Status(props: { enabled?: boolean }) {
  return (
    <Box>
      {props.enabled ? (
        <Badge color="green" variant="filled">
          Yes
        </Badge>
      ) : (
        <Badge color="red" variant="filled">
          No
        </Badge>
      )}
    </Box>
  );
}

export default function RoutesPage() {
  const params = useParams();
  const machineId = params.machineId ?? 'All';
  const navigate = useNavigate();

  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Routes',
      description: `Manage routes${machineId ? ` for ${machineId}` : ''}`,
    });
  }, [setMeta]);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectRoute, setSelectRoute] = useState<V1Route | null>(null);

  const filterForm = useForm({
    initialValues: {
      machineId: '',
    },
  });

  useEffect(() => {
    filterForm.setFieldValue('machineId', machineId);
  }, [machineId]);

  useEffect(() => {
    const machineId = filterForm.values.machineId;
    if (machineId) {
      let url = '';
      if (machineId === 'All') {
        url = '/routes';
      } else {
        url = `/routes/${machineId}`;
      }
      navigate(url, { replace: true });
    }
  }, [filterForm.values.machineId]);

  const {
    data: allRoutes,
    isLoading: isLoadingRoutes,
    mutate,
  } = useSwrQuery(headscaleServiceListRoutes, {
    machineId:
      filterForm.values.machineId === 'All'
        ? undefined
        : filterForm.values.machineId,
  });

  const { data: machines } = useSwrQuery(headscaleServiceListMachines, {});

  const openDeleteConfirmation = useCallback(
    (deleteRoute: V1Route) =>
      modals.openConfirmModal({
        title: 'Delete route',
        children: (
          <Text>
            Are you sure you want to delete route{' '}
            <Text w={500} c="red" display="inline">
              {deleteRoute?.prefix}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceDeleteMachine, deleteRoute.id!);
          mutate();
        },
      }),
    [],
  );

  const toggleStatus = useCallback(async (route: V1Route, enabled: boolean) => {
    if (enabled) {
      await callQuery(headscaleServiceEnableRoute, route.id!);
    } else {
      await callQuery(headscaleServiceDisableRoute, route.id!);
    }
    mutate();
  }, []);

  const routes = allRoutes;

  return (
    <>
      <Drawer
        offset={8}
        position="right"
        radius="md"
        opened={opened}
        onClose={close}
        title="Route"
      >
        <Stack
          style={{
            lineBreak: 'anywhere',
          }}
        >
          {selectRoute && (
            <>
              <Input.Wrapper label="ID">
                <Text>{selectRoute.id}</Text>
              </Input.Wrapper>

              <Input.Wrapper label="Prefix">
                <Text>{selectRoute.prefix}</Text>
              </Input.Wrapper>

              <Input.Wrapper label="Machine">
                <Text>
                  <Link to={`/machines/${selectRoute.machine?.id}`}>
                    {selectRoute.machine?.givenName}(
                    {selectRoute.machine?.ipAddresses?.join(' / ')} )
                  </Link>
                </Text>
              </Input.Wrapper>

              <Input.Wrapper label="Advertised">
                <Status enabled={selectRoute.advertised} />
              </Input.Wrapper>

              <Input.Wrapper label="Enabled">
                <Status enabled={selectRoute.enabled} />
              </Input.Wrapper>

              <Input.Wrapper label="Primary">
                <Status enabled={selectRoute.isPrimary} />
              </Input.Wrapper>

              <Divider />

              <Input.Wrapper label="Created At">
                <Text>
                  {selectRoute.createdAt
                    ? new Date(selectRoute.createdAt).toLocaleString()
                    : ''}
                </Text>
              </Input.Wrapper>

              <Input.Wrapper label="Updated At">
                <Text>
                  {selectRoute.updatedAt
                    ? new Date(selectRoute.updatedAt).toLocaleString()
                    : ''}
                </Text>
              </Input.Wrapper>

              <Input.Wrapper label="Deleted At">
                <Text>
                  {selectRoute.deletedAt
                    ? new Date(selectRoute.deletedAt).toLocaleString()
                    : ''}
                </Text>
              </Input.Wrapper>
            </>
          )}
        </Stack>
      </Drawer>

      <Container>
        <Skeleton visible={isLoadingRoutes} height={rem(240)}>
          <Stack my="md">
            <Select
              label="Filter By Machine"
              placeholder="Pick machine"
              data={[
                { label: 'All', value: 'All' },
                ...(machines?.machines?.map((machine) => ({
                  label: machine.name!,
                  value: machine.id!,
                })) ?? []),
              ]}
              {...filterForm.getInputProps('machineId')}
            />
          </Stack>
          <Table captionSide="bottom">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Prefix</Table.Th>
                <Table.Th>Machine</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Created At</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {routes?.routes
                ?.toSorted((a, b) => parseInt(a.id!) - parseInt(b.id!))
                ?.map((route) => (
                  <Table.Tr key={route.id}>
                    <Table.Td>{route.id}</Table.Td>
                    <Table.Td>{route.prefix}</Table.Td>
                    <Table.Td>
                      <Link to={`/machines/${route.machine?.id}`}>
                        {route.machine?.givenName}(
                        {route.machine?.ipAddresses?.join(' / ')} )
                      </Link>
                    </Table.Td>
                    <Table.Td>
                      <Switch
                        checked={route.enabled}
                        onChange={(e) => {
                          toggleStatus(route, e.target.checked);
                        }}
                      />
                    </Table.Td>
                    <Table.Td>
                      {new Date(route.createdAt!).toLocaleString()}
                    </Table.Td>
                    <Table.Td>
                      <Group>
                        <ActionIcon
                          title="More"
                          variant="light"
                          onClick={() => {
                            setSelectRoute(route);
                            open();
                          }}
                        >
                          <IconEdit />
                        </ActionIcon>
                        <ActionIcon
                          title="Delete"
                          color="red"
                          variant="light"
                          onClick={() => openDeleteConfirmation(route)}
                        >
                          <IconTrash />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              <Table.Tr>
                <Table.Td colSpan={5}></Table.Td>
                <Table.Td>{routes?.routes?.length} routes</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Skeleton>
      </Container>
    </>
  );
}
