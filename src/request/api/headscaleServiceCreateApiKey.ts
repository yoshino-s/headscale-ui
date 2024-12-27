import client from '@/utils/client'
import type { HeadscaleServiceCreateApiKeyMutationRequest, HeadscaleServiceCreateApiKeyMutationResponse } from '../models/HeadscaleServiceCreateApiKey.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- ApiKeys start ---
 * {@link /api/v1/apikey}
 */
export async function headscaleServiceCreateApiKey(
  data?: HeadscaleServiceCreateApiKeyMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceCreateApiKeyMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceCreateApiKeyMutationResponse, Error, HeadscaleServiceCreateApiKeyMutationRequest>({
    method: 'POST',
    url: `/api/v1/apikey`,
    data,
    ...config,
  })
  return res.data
}