import client from '@/utils/client'
import type { HeadscaleServiceListApiKeysQueryResponse } from '../models/HeadscaleServiceListApiKeys.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/apikey}
 */
export async function headscaleServiceListApiKeys(config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceListApiKeysQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/apikey`, ...config })
  return res.data
}