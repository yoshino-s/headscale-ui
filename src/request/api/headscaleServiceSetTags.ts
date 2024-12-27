import client from '@/utils/client'
import type {
  HeadscaleServiceSetTagsMutationRequest,
  HeadscaleServiceSetTagsMutationResponse,
  HeadscaleServiceSetTagsPathParams,
} from '../models/HeadscaleServiceSetTags.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId/tags}
 */
export async function headscaleServiceSetTags(
  nodeId: HeadscaleServiceSetTagsPathParams['nodeId'],
  data?: HeadscaleServiceSetTagsMutationRequest,
  config: Partial<RequestConfig<HeadscaleServiceSetTagsMutationRequest>> = {},
) {
  const res = await client<HeadscaleServiceSetTagsMutationResponse, Error, HeadscaleServiceSetTagsMutationRequest>({
    method: 'POST',
    url: `/api/v1/node/${nodeId}/tags`,
    data,
    ...config,
  })
  return res.data
}