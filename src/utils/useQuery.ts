import { notifications } from '@mantine/notifications';

import type { ResponseConfig } from '@kubb/swagger-client/client';
import client from '@kubb/swagger-client/client';
import { AxiosError } from 'axios';
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
    return await func(...params, {
      baseURL: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

  const res = useSwr<T, AxiosError>(
    `${func.name}-${url}-${token}-${JSON.stringify(params)}`,
    () => callQuery(func, ...params),
  );

  return res;
}
