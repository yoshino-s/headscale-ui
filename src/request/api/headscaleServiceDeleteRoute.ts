import client from '@/utils/client'
import type { HeadscaleServiceDeleteRouteMutationResponse, HeadscaleServiceDeleteRoutePathParams } from '../models/HeadscaleServiceDeleteRoute.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/routes/:routeId}
 */
export async function headscaleServiceDeleteRoute(routeId: HeadscaleServiceDeleteRoutePathParams['routeId'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceDeleteRouteMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/v1/routes/${routeId}`, ...config })
  return res.data
}