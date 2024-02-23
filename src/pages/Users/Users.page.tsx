import { useCallback, useEffect, useState } from 'react';

import {
  ActionIcon,
  Button,
  Container,
  Drawer,
  Group,
  Input,
  Skeleton,
  Stack,
  Table,
  Text,
  TextInput,
  Tooltip,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

import {
  IconDevices2,
  IconEdit,
  IconKey,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import {
  V1User,
  headscaleServiceCreateUser,
  headscaleServiceDeleteUser,
  headscaleServiceListUsers,
  headscaleServiceRenameUser,
} from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

export default function UsersPage() {
  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Users',
      description: 'Manage users',
    });
  }, [setMeta]);

  const {
    data: users,
    isLoading: isLoadingUsers,
    mutate,
  } = useSwrQuery(headscaleServiceListUsers);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectUser, setSelectUser] = useState<V1User | null>(null);

  const form = useForm({
    initialValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (selectUser) {
      form.setValues({
        name: selectUser.name ?? '',
      });
    }
  }, [selectUser]);

  const openDeleteConfirmation = useCallback(
    (deleteUser: V1User) =>
      modals.openConfirmModal({
        title: 'Delete user',
        children: (
          <Text>
            Are you sure you want to delete user{' '}
            <Text w={500} c="red" display="inline">
              {deleteUser?.name}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceDeleteUser, deleteUser.name!);
          mutate();
        },
      }),
    [],
  );

  const submit = useCallback(
    async (values: { name: string }) => {
      if (selectUser?.name) {
        if (selectUser.name !== values.name) {
          await callQuery(
            headscaleServiceRenameUser,
            selectUser.name,
            values.name,
          );
        }
      } else {
        await callQuery(headscaleServiceCreateUser, {
          name: values.name,
        });
      }
      mutate();
      close();
    },
    [selectUser],
  );

  return (
    <>
      <Drawer
        offset={8}
        position="right"
        radius="md"
        opened={opened}
        onClose={close}
        title="User"
      >
        <form onSubmit={form.onSubmit(submit)}>
          <Stack>
            {selectUser && (
              <Input.Wrapper label="ID">
                <Text>{selectUser.id}</Text>
              </Input.Wrapper>
            )}
            <TextInput
              label="Name"
              placeholder="name"
              required
              {...form.getInputProps('name')}
            />
            <Button type="submit" fullWidth mt="md">
              Save
            </Button>
            {selectUser && (
              <Input.Wrapper label="Created At">
                <Text>{new Date(selectUser.createdAt!).toLocaleString()}</Text>
              </Input.Wrapper>
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
        <Skeleton visible={isLoadingUsers} height={rem(240)}>
          <Table captionSide="bottom">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ID</Table.Th>
                <Table.Th>Username</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {users?.users?.map((user) => (
                <Table.Tr key={user.id}>
                  <Table.Td>{user.id}</Table.Td>
                  <Table.Td>{user.name}</Table.Td>
                  <Table.Td>
                    <Group>
                      <Tooltip label="Edit">
                        <ActionIcon
                          title="Edit"
                          variant="light"
                          onClick={() => {
                            setSelectUser(user);
                            open();
                          }}
                        >
                          <IconEdit />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Delete">
                        <ActionIcon
                          title="Delete"
                          color="red"
                          variant="light"
                          onClick={() => openDeleteConfirmation(user)}
                        >
                          <IconTrash />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Machines">
                        <ActionIcon
                          title="Machines"
                          variant="light"
                          component={Link}
                          to={`/machines/${user.name}`}
                        >
                          <IconDevices2 />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Pre Auth Keys">
                        <ActionIcon
                          title="Pre Auth Keys"
                          variant="light"
                          component={Link}
                          to={`/preauthkeys/${user.name}`}
                        >
                          <IconKey />
                        </ActionIcon>
                      </Tooltip>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
              <Table.Tr>
                <Table.Td colSpan={2}></Table.Td>
                <Table.Td>{users?.users?.length} users </Table.Td>
              </Table.Tr>
            </Table.Tbody>
            <Table.Caption>
              <ActionIcon
                title="Add"
                variant="filled"
                onClick={() => {
                  setSelectUser(null);
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
