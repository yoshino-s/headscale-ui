import client from '@/utils/client'
import type {
  HeadscaleServiceMoveNodeMutationResponse,
  HeadscaleServiceMoveNodePathParams,
  HeadscaleServiceMoveNodeQueryParams,
} from '../models/HeadscaleServiceMoveNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId/user}
 */
export async function headscaleServiceMoveNode(
  nodeId: HeadscaleServiceMoveNodePathParams['nodeId'],
  params?: HeadscaleServiceMoveNodeQueryParams,
  config: Partial<RequestConfig> = {},
) {
  const res = await client<HeadscaleServiceMoveNodeMutationResponse, Error, unknown>({ method: 'POST', url: `/api/v1/node/${nodeId}/user`, params, ...config })
  return res.data
}