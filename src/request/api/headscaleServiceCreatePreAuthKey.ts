import client from '@/utils/client'
import type {
  HeadscaleServiceCreatePreAuthKeyMutationRequest,
  HeadscaleServiceCreatePreAuthKeyMutationResponse,
} from '../models/HeadscaleServiceCreatePreAuthKey.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- PreAuthKeys start ---
 * {@link /api/v1/preauthkey}
 */
export async function headscaleServiceCreatePreAuthKey(
  data?: HeadscaleServiceCreatePreAuthKeyMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceCreatePreAuthKeyMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceCreatePreAuthKeyMutationResponse, Error, HeadscaleServiceCreatePreAuthKeyMutationRequest>({
    method: 'POST',
    url: `/api/v1/preauthkey`,
    data,
    ...config,
  })
  return res.data
}