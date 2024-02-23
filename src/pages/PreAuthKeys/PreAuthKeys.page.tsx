import { useCallback, useEffect, useState } from 'react';

import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Drawer,
  Group,
  Skeleton,
  Stack,
  Switch,
  Table,
  TagsInput,
  Text,
  rem,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

import {
  V1PreAuthKey,
  headscaleServiceCreatePreAuthKey,
  headscaleServiceExpirePreAuthKey,
  headscaleServiceListPreAuthKeys,
} from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';

function isExpire(preAuthKeys: V1PreAuthKey) {
  return new Date(preAuthKeys.expiration!) < new Date();
}

export function PreAuthKeysPage() {
  const params = useParams();
  const user = params.user!;

  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Pre Auth Keys',
      description: `Manage pre auth keys for ${user}`,
    });
  }, [setMeta]);

  const {
    data: preAuthKeys,
    isLoading: isLoadingPreAuthKeys,
    mutate,
  } = useSwrQuery(headscaleServiceListPreAuthKeys, {
    user,
  });
  const [showExpired, setShowExpired] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      reusable: true,
      ephemeral: true,
      expiration: new Date(),
      aclTags: [] as string[],
    },
  });

  const openDeleteConfirmation = useCallback(
    (preAuthKeys: V1PreAuthKey) =>
      modals.openConfirmModal({
        title: 'Delete pre auth keys',
        children: (
          <Text>
            Are you sure you want to delete user{' '}
            <Text w={500} c="red" display="inline">
              {preAuthKeys?.key}
            </Text>
            ?
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: async () => {
          await callQuery(headscaleServiceExpirePreAuthKey, {
            user,
            key: preAuthKeys.key,
          });
          mutate();
        },
      }),
    [],
  );

  const submit = useCallback(async (data: (typeof form)['values']) => {
    console.log('123');
    await callQuery(headscaleServiceCreatePreAuthKey, {
      user,
      ephemeral: data.ephemeral,
      reusable: data.reusable,
      expiration: data.expiration.toISOString(),
      aclTags: data.aclTags,
    });
    mutate();
    close();
  }, []);

  return (
    <>
      <Drawer
        offset={8}
        position="right"
        radius="md"
        opened={opened}
        onClose={close}
        title="Pre Auth Key"
      >
        <form onSubmit={form.onSubmit(submit)}>
          <Stack>
            <Switch
              label="Reusable"
              placeholder="reusable"
              {...form.getInputProps('reusable')}
            />
            <Switch
              label="Ephemeral"
              placeholder="ephemeral"
              {...form.getInputProps('ephemeral')}
            />
            <DateTimePicker
              label="Expiration"
              placeholder="expiration"
              required
              {...form.getInputProps('expiration')}
            />
            <TagsInput
              label="Acl Tags"
              placeholder="aclTags"
              {...form.getInputProps('aclTags')}
            />
            <Button type="submit" fullWidth mt="md">
              Save
            </Button>
          </Stack>
        </form>
      </Drawer>

      <Container>
        <Skeleton visible={isLoadingPreAuthKeys} height={rem(240)}>
          <Group my="md">
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
                <Table.Th>Key</Table.Th>
                <Table.Th>Acl Tags</Table.Th>
                <Table.Th>Tags</Table.Th>
                <Table.Th>Expiration</Table.Th>
                <Table.Th>Created At</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {preAuthKeys?.preAuthKeys
                ?.toSorted((a, b) => parseInt(a.id!) - parseInt(b.id!))
                ?.map(
                  (preAuthKey) =>
                    (!isExpire(preAuthKey) || showExpired) && (
                      <Table.Tr
                        key={preAuthKey.id}
                        style={{
                          backgroundColor: isExpire(preAuthKey)
                            ? 'var(--mantine-color-red-light)'
                            : undefined,
                        }}
                      >
                        <Table.Td>{preAuthKey.id}</Table.Td>
                        <Table.Td>{preAuthKey.key}</Table.Td>
                        <Table.Td>{preAuthKey.aclTags}</Table.Td>
                        <Table.Td>
                          {preAuthKey.reusable && (
                            <Badge color="teal">Reusable</Badge>
                          )}
                          {preAuthKey.ephemeral && (
                            <Badge color="red">Ephemeral</Badge>
                          )}
                          {preAuthKey.used ? (
                            <Badge color="gray">Used</Badge>
                          ) : (
                            <Badge color="green">Not Used</Badge>
                          )}
                        </Table.Td>
                        <Table.Td>
                          {new Date(preAuthKey.expiration!).toLocaleString()}
                        </Table.Td>
                        <Table.Td>
                          {new Date(preAuthKey.createdAt!).toLocaleString()}
                        </Table.Td>
                        <Table.Td>
                          {!isExpire(preAuthKey) && (
                            <Group>
                              <ActionIcon
                                title="Delete"
                                color="red"
                                variant="light"
                                onClick={() =>
                                  openDeleteConfirmation(preAuthKey)
                                }
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
                <Table.Td colSpan={6}></Table.Td>
                <Table.Td>
                  {showExpired
                    ? preAuthKeys?.preAuthKeys?.length
                    : preAuthKeys?.preAuthKeys?.filter(
                        (preAuthKey) => !isExpire(preAuthKey),
                      ).length}{' '}
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
                    new Date(Date.now() + 1000 * 60 * 60 * 24),
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
    </>
  );
}
