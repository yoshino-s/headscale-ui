import { useEffect } from 'react';

import { notifications } from '@mantine/notifications';

import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

import { getConfig } from './useConfig';

import type { ApiError, RequestConfig, ResponseConfig } from '@/utils/client';

export type ApiFunction<Params extends any[], T> = (
  ...params: [...Params, Partial<RequestConfig<any>> | undefined]
) => Promise<ResponseConfig<T>['data']>;

export async function callQuery<Params extends any[], T>(
  func: ApiFunction<Params, T>,
  ...params: Params
) {
  try {
    return await func(...params, {});
  } catch (error) {
    let data = (error as ApiError)?.data;
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

  const res = useSwr<T, ApiError>(
    `${func.name}-${url}-${token}-${JSON.stringify(params)}`,
    () => callQuery(func, ...params),
  );

  useEffect(() => {
    if (res.error) {
      const data = res.error?.data;

      if (data === 'Unauthorized' || data === 'Invalid response') {
        navigate('/login');
      }
    }
  }, [res.error]);

  return res;
}
