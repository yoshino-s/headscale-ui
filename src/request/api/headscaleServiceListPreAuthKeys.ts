import client from '@/utils/client'
import type { HeadscaleServiceListPreAuthKeysQueryResponse, HeadscaleServiceListPreAuthKeysQueryParams } from '../models/HeadscaleServiceListPreAuthKeys.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/preauthkey}
 */
export async function headscaleServiceListPreAuthKeys(params?: HeadscaleServiceListPreAuthKeysQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceListPreAuthKeysQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/preauthkey`, params, ...config })
  return res.data
}