import { useCallback, useEffect, useState } from 'react';

import {
  ActionIcon,
  Button,
  Container,
  Drawer,
  Group,
  Skeleton,
  Switch,
  Table,
  Text,
  rem,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { IconPlus, IconTrash } from '@tabler/icons-react';

import classes from './ApiKeys.module.css';

import {
  V1ApiKey,
  headscaleServiceCreateApiKey,
  headscaleServiceExpireApiKey,
  headscaleServiceListApiKeys,
} from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

function isExpire(apiKeys: V1ApiKey) {
  return new Date(apiKeys.expiration!) < new Date();
}

export function ApiKeysPage() {
  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Api Keys',
      description: 'Manage Api Keys',
    });
  }, [setMeta]);

  const {
    data: apiKeys,
    isLoading: isLoadingApiKeys,
    mutate,
  } = useSwrQuery(headscaleServiceListApiKeys);
  const [showExpired, setShowExpired] = useState(false);

  const openDeleteConfirmation = useCallback(
    (deleteApiKeys: V1ApiKey) =>
      modals.openConfirmModal({
        title: 'Delete api key',
        children: (
          <Text>
            Are you sure you want to delete api key with prefix{' '}
            <Text w={500} c="red" display="inline">
              {deleteApiKeys?.prefix}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceExpireApiKey, {
            prefix: deleteApiKeys.prefix,
          });
          mutate();
          notifications.show({
            title: 'Api key deleted',
            message: `Api key with prefix ${deleteApiKeys.prefix} has been deleted`,
            color: 'green',
            autoClose: 5000,
          });
        },
      }),
    [],
  );

  const form = useForm({
    initialValues: {
      expiration: new Date(),
    },
  });

  const [opened, { open, close }] = useDisclosure(false);

  const submit = useCallback(async (values: { expiration: Date }) => {
    await callQuery(headscaleServiceCreateApiKey, {
      expiration: values.expiration.toISOString(),
    });
    mutate();
    notifications.show({
      title: 'Api key created',
      message: `Api key has been created`,
      color: 'green',
      autoClose: 5000,
    });
    close();
  }, []);

  return (
    <Container>
      <Drawer
        offset={8}
        position="right"
        radius="md"
        opened={opened}
        onClose={close}
        title="User"
      >
        <form onSubmit={form.onSubmit(submit)}>
          <DateTimePicker
            label="Pick date and time"
            placeholder="Pick date and time"
            {...form.getInputProps('expiration')}
          />
          <Button type="submit" fullWidth mt="md">
            Save
          </Button>
        </form>
      </Drawer>
      <Skeleton visible={isLoadingApiKeys} height={rem(240)}>
        <Group justify="space-between" my="md">
          <Switch
            label="Show expired"
            checked={showExpired}
            onChange={(event) => setShowExpired(event.currentTarget.checked)}
          />
        </Group>
        <Table captionSide="bottom">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Prefix</Table.Th>
              <Table.Th>Expiration</Table.Th>
              <Table.Th>Last Seen</Table.Th>
              <Table.Th>Created At</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {apiKeys?.apiKeys
              ?.toSorted((a, b) => parseInt(a.id!) - parseInt(b.id!))
              ?.map(
                (apiKeys) =>
                  (!isExpire(apiKeys) || showExpired) && (
                    <Table.Tr
                      key={apiKeys.id}
                      className={isExpire(apiKeys) ? classes.expire : ''}
                    >
                      <Table.Td>{apiKeys.id}</Table.Td>
                      <Table.Td>{apiKeys.prefix}</Table.Td>
                      <Table.Td>
                        {new Date(apiKeys.expiration!).toLocaleString()}
                      </Table.Td>
                      <Table.Td>
                        {new Date(apiKeys.lastSeen!).toLocaleString()}
                      </Table.Td>
                      <Table.Td>
                        {new Date(apiKeys.createdAt!).toLocaleString()}
                      </Table.Td>
                      <Table.Td>
                        {!isExpire(apiKeys) && (
                          <Group>
                            <ActionIcon
                              title="Delete"
                              color="red"
                              variant="light"
                              onClick={() => openDeleteConfirmation(apiKeys)}
                            >
                              <IconTrash />
                            </ActionIcon>
                          </Group>
                        )}
                      </Table.Td>
                    </Table.Tr>
                  ),
              )}
            <Table.Tr>
              <Table.Td colSpan={5}></Table.Td>
              <Table.Td>
                {showExpired
                  ? apiKeys?.apiKeys?.length
                  : apiKeys?.apiKeys?.filter((apiKeys) => !isExpire(apiKeys))
                      .length}{' '}
                keys
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
          <Table.Caption>
            <ActionIcon
              title="Add"
              variant="filled"
              onClick={() => {
                form.setFieldValue(
                  'expiration',
                  new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                );
                open();
              }}
            >
              <IconPlus />
            </ActionIcon>
          </Table.Caption>
        </Table>
      </Skeleton>
    </Container>
  );
}
