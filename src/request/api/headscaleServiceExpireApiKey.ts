import client from '@/utils/client'
import type { HeadscaleServiceExpireApiKeyMutationRequest, HeadscaleServiceExpireApiKeyMutationResponse } from '../models/HeadscaleServiceExpireApiKey.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/apikey/expire}
 */
export async function headscaleServiceExpireApiKey(
  data?: HeadscaleServiceExpireApiKeyMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceExpireApiKeyMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceExpireApiKeyMutationResponse, Error, HeadscaleServiceExpireApiKeyMutationRequest>({
    method: 'POST',
    url: `/api/v1/apikey/expire`,
    data,
    ...config,
  })
  return res.data
}