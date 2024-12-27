import client from '@/utils/client'
import type { HeadscaleServiceDisableRouteMutationResponse, HeadscaleServiceDisableRoutePathParams } from '../models/HeadscaleServiceDisableRoute.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/routes/:routeId/disable}
 */
export async function headscaleServiceDisableRoute(routeId: HeadscaleServiceDisableRoutePathParams['routeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceDisableRouteMutationResponse, Error, unknown>({
    method: 'POST',
    url: `/api/v1/routes/${routeId}/disable`,
    ...config,
  })
  return res.data
}