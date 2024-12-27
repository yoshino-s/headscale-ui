import client from '@/utils/client'
import type { HeadscaleServiceListUsersQueryResponse } from '../models/HeadscaleServiceListUsers.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/user}
 */
export async function headscaleServiceListUsers(config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceListUsersQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/user`, ...config })
  return res.data
}