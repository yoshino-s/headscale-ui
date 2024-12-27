import client from '@/utils/client'
import type { HeadscaleServiceEnableRouteMutationResponse, HeadscaleServiceEnableRoutePathParams } from '../models/HeadscaleServiceEnableRoute.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/routes/:routeId/enable}
 */
export async function headscaleServiceEnableRoute(routeId: HeadscaleServiceEnableRoutePathParams['routeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceEnableRouteMutationResponse, Error, unknown>({ method: 'POST', url: `/api/v1/routes/${routeId}/enable`, ...config })
  return res.data
}