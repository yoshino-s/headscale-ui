import { useEffect } from 'react';

import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.css';

import { headscaleServiceListApiKeys } from '@/request';
import { useConfig } from '@/utils/useConfig';

export function LoginPage() {
  const navigate = useNavigate();
  const { url, token, setUrl, setToken } = useConfig();

  const form = useForm({
    initialValues: {
      url: '',
      token: '',
    },
  });

  useEffect(() => {
    form.setFieldValue('url', url);
    form.setFieldValue('token', token);
  }, [url, token, form]);

  function submit(values: { url: string; token: string }) {
    headscaleServiceListApiKeys({
      baseURL: values.url,
      headers: {
        Authorization: `Bearer ${values.token}`,
      },
    })
      .then(() => {
        setUrl(values.url);
        setToken(values.token);
        navigate('/');
      })
      .catch((e: AxiosError) => {
        let data = e.response?.data;
        if (typeof data !== 'string') {
          data = JSON.stringify(data);
        }
        notifications.show({
          title: 'Error',
          message: data as string,
          color: 'red',
          autoClose: 5000,
        });
      });
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Headscale UI
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            label="URL"
            placeholder="https://headscale.company.com"
            required
            {...form.getInputProps('url')}
          />
          <PasswordInput
            label="Token"
            placeholder="Your token"
            required
            mt="md"
            {...form.getInputProps('token')}
          />
          <Group justify="space-between" mt="lg">
            <Anchor
              component="a"
              size="sm"
              href="https://headscale.net/remote-cli/#create-an-api-key"
              target="_blank"
            >
              How to get token
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
