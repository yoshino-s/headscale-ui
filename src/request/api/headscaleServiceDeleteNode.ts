import client from '@/utils/client'
import type { HeadscaleServiceDeleteNodeMutationResponse, HeadscaleServiceDeleteNodePathParams } from '../models/HeadscaleServiceDeleteNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId}
 */
export async function headscaleServiceDeleteNode(nodeId: HeadscaleServiceDeleteNodePathParams['nodeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceDeleteNodeMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/v1/node/${nodeId}`, ...config })
  return res.data
}