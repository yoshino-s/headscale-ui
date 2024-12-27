import client from '@/utils/client'
import type { HeadscaleServiceRegisterNodeMutationResponse, HeadscaleServiceRegisterNodeQueryParams } from '../models/HeadscaleServiceRegisterNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/register}
 */
export async function headscaleServiceRegisterNode(params?: HeadscaleServiceRegisterNodeQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceRegisterNodeMutationResponse, Error, unknown>({ method: 'POST', url: `/api/v1/node/register`, params, ...config })
  return res.data
}