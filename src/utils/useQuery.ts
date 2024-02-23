import { useEffect } from 'react';

import { notifications } from '@mantine/notifications';

import type { ResponseConfig } from '@kubb/swagger-client/client';
import client from '@kubb/swagger-client/client';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

import { getConfig } from './useConfig';

export type ApiFunction<Params extends any[], T> = (
  ...params: [...Params, Partial<Parameters<typeof client>[0]> | undefined]
) => Promise<ResponseConfig<T>['data']>;

export async function callQuery<Params extends any[], T>(
  func: ApiFunction<Params, T>,
  ...params: Params
) {
  const { url, token } = getConfig();

  try {
    const resp = await func(...params, {
      baseURL: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (typeof resp === 'string') {
      throw new AxiosError('Invalid response', '500', undefined, null, {
        data: 'Invalid response',
      } as AxiosResponse);
    } else {
      return resp;
    }
  } catch (error) {
    console.log(error);
    let data = (error as AxiosError)?.response?.data;
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }

    notifications.show({
      title: 'Error',
      message: data as string,
      color: 'red',
      autoClose: 5000,
    });

    throw error;
  }
}

export function useSwrQuery<Params extends any[], T>(
  func: ApiFunction<Params, T>,
  ...params: Params
) {
  const { url, token } = getConfig();
  const navigate = useNavigate();

  const res = useSwr<T, AxiosError>(
    `${func.name}-${url}-${token}-${JSON.stringify(params)}`,
    () => callQuery(func, ...params),
  );

  useEffect(() => {
    if (res.error) {
      const data = res.error.response?.data;

      if (data === 'Unauthorized' || data === 'Invalid response') {
        navigate('/login');
      }
    }
  }, [res.error]);

  return res;
}
