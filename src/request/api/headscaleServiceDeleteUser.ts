import client from '@/utils/client'
import type { HeadscaleServiceDeleteUserMutationResponse, HeadscaleServiceDeleteUserPathParams } from '../models/HeadscaleServiceDeleteUser.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/user/:name}
 */
export async function headscaleServiceDeleteUser(name: HeadscaleServiceDeleteUserPathParams['name'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceDeleteUserMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/v1/user/${name}`, ...config })
  return res.data
}