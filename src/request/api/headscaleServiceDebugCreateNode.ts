import client from '@/utils/client'
import type {
  HeadscaleServiceDebugCreateNodeMutationRequest,
  HeadscaleServiceDebugCreateNodeMutationResponse,
} from '../models/HeadscaleServiceDebugCreateNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- Node start ---
 * {@link /api/v1/debug/node}
 */
export async function headscaleServiceDebugCreateNode(
  data?: HeadscaleServiceDebugCreateNodeMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceDebugCreateNodeMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceDebugCreateNodeMutationResponse, Error, HeadscaleServiceDebugCreateNodeMutationRequest>({
    method: 'POST',
    url: `/api/v1/debug/node`,
    data,
    ...config,
  })
  return res.data
}