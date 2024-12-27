import client from '@/utils/client'
import type { HeadscaleServiceSetPolicyMutationRequest, HeadscaleServiceSetPolicyMutationResponse } from '../models/HeadscaleServiceSetPolicy.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/policy}
 */
export async function headscaleServiceSetPolicy(
  data?: HeadscaleServiceSetPolicyMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceSetPolicyMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceSetPolicyMutationResponse, Error, HeadscaleServiceSetPolicyMutationRequest>({
    method: 'PUT',
    url: `/api/v1/policy`,
    data,
    ...config,
  })
  return res.data
}