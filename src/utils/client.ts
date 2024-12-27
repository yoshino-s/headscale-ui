import { getConfig } from '@/utils/useConfig';
import {
  RequestConfig as BRequestConfig,
  ResponseConfig as BResponseConfig,
} from '@kubb/plugin-client/clients/fetch';

export interface RequestConfig<TData = unknown> extends BRequestConfig<TData> {
  token?: string;
}

export type ResponseConfig<TData = unknown> = BResponseConfig<TData>;

export class ApiError {
  constructor(
    public message: string,
    public status: number,
    public data: unknown,
  ) {}
}

export const client = async <TData, _TError = unknown, TVariables = unknown>(
  config: RequestConfig<unknown | TVariables>,
): Promise<ResponseConfig<TData>> => {
  const cfg = getConfig();

  if (!config.url) {
    throw new Error('url is required');
  }
  const url = new URL(config.url, config.baseURL ?? cfg.url);
  if (config.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      if (value === undefined) return;
      url.searchParams.append(key, value as string);
    });
  }

  return fetch(url.toString(), {
    method: config.method,
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      'Content-Type': 'application/json',
      ...config.headers,
    },
    body: JSON.stringify(config.data),
    credentials: 'omit',
  }).then(async (resp) => {
    if (!resp.ok) {
      throw new ApiError(resp.statusText, resp.status, {});
    }

    return {
      status: resp.status,
      statusText: resp.statusText,
      data: await resp.json(),
      headers: Array.from(resp.headers.entries()),
    };
  });
};

export default client;
