import client from '@/utils/client'
import type { HeadscaleServiceGetUserQueryResponse, HeadscaleServiceGetUserPathParams } from '../models/HeadscaleServiceGetUser.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- User start ---
 * {@link /api/v1/user/:name}
 */
export async function headscaleServiceGetUser(name: HeadscaleServiceGetUserPathParams['name'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceGetUserQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/user/${name}`, ...config })
  return res.data
}