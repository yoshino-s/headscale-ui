import client from '@/utils/client'
import type {
  HeadscaleServiceExpirePreAuthKeyMutationRequest,
  HeadscaleServiceExpirePreAuthKeyMutationResponse,
} from '../models/HeadscaleServiceExpirePreAuthKey.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/preauthkey/expire}
 */
export async function headscaleServiceExpirePreAuthKey(
  data?: HeadscaleServiceExpirePreAuthKeyMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceExpirePreAuthKeyMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceExpirePreAuthKeyMutationResponse, Error, HeadscaleServiceExpirePreAuthKeyMutationRequest>({
    method: 'POST',
    url: `/api/v1/preauthkey/expire`,
    data,
    ...config,
  })
  return res.data
}