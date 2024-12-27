import client from '@/utils/client'
import type { HeadscaleServiceCreateUserMutationRequest, HeadscaleServiceCreateUserMutationResponse } from '../models/HeadscaleServiceCreateUser.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/user}
 */
export async function headscaleServiceCreateUser(
  data?: HeadscaleServiceCreateUserMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceCreateUserMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceCreateUserMutationResponse, Error, HeadscaleServiceCreateUserMutationRequest>({
    method: 'POST',
    url: `/api/v1/user`,
    data,
    ...config,
  })
  return res.data
}