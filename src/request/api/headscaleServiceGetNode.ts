import client from '@/utils/client'
import type { HeadscaleServiceGetNodeQueryResponse, HeadscaleServiceGetNodePathParams } from '../models/HeadscaleServiceGetNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId}
 */
export async function headscaleServiceGetNode(nodeId: HeadscaleServiceGetNodePathParams['nodeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceGetNodeQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/node/${nodeId}`, ...config })
  return res.data
}