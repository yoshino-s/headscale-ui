import { getConfig } from '@/utils/useConfig';

export type RequestConfig<TData = unknown> = {
  baseURL?: string;
  token?: string;
  url: string;
  method: 'get' | 'put' | 'patch' | 'post' | 'delete';
  params?: unknown;
  data?: TData;
};

export type ResponseConfig<TData = unknown> = {
  data: TData;
};

export class ApiError {
  constructor(
    public message: string,
    public status: number,
    public data: unknown,
  ) {}
}

export const client = async <TData = unknown, TVariables = unknown>(
  config: RequestConfig<unknown | TVariables>,
): Promise<ResponseConfig<TData>> => {
  const cfg = getConfig();

  const url = new URL(config.url, config.baseURL ?? cfg.url);

  return fetch(url.toString(), {
    method: config.method,
    headers: {
      Authorization: `Bearer ${config.token ?? cfg.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config.data),
    credentials: 'omit',
  })
    .then(async (resp) => {
      if (!resp.ok) {
        throw new ApiError(resp.statusText, resp.status, {});
      }
      if (resp.headers.get('content-type')?.includes('application/json')) {
        const data = await resp.text();
        try {
          return JSON.parse(data);
        } catch (e) {
          throw new ApiError('Invalid JSON', resp.status, data);
        }
      }
      return resp.json();
    })
    .then((data) => {
      return { data };
    });
};

export default client;
