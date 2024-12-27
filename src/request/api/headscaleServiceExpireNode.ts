import client from '@/utils/client'
import type { HeadscaleServiceExpireNodeMutationResponse, HeadscaleServiceExpireNodePathParams } from '../models/HeadscaleServiceExpireNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId/expire}
 */
export async function headscaleServiceExpireNode(nodeId: HeadscaleServiceExpireNodePathParams['nodeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceExpireNodeMutationResponse, Error, unknown>({ method: 'POST', url: `/api/v1/node/${nodeId}/expire`, ...config })
  return res.data
}