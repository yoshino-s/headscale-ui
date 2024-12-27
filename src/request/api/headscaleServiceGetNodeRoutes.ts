import type { RequestConfig } from '@/utils/client'
import client from '@/utils/client'
import type { HeadscaleServiceGetNodeRoutesPathParams, HeadscaleServiceGetNodeRoutesQueryResponse } from '../models/HeadscaleServiceGetNodeRoutes.ts'

/**
 * {@link /api/v1/node/:nodeId/routes}
 */
export async function headscaleServiceGetNodeRoutes(nodeId: HeadscaleServiceGetNodeRoutesPathParams['nodeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceGetNodeRoutesQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/node/${nodeId}/routes`, ...config })
  return res.data
}