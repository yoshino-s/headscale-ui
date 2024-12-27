import client from '@/utils/client'
import type { HeadscaleServiceListNodesQueryResponse, HeadscaleServiceListNodesQueryParams } from '../models/HeadscaleServiceListNodes.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node}
 */
export async function headscaleServiceListNodes(params?: HeadscaleServiceListNodesQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceListNodesQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/node`, params, ...config })
  return res.data
}