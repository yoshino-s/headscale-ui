import type { RpcStatus } from './RpcStatus.ts'
import type { V1DeleteRouteResponse } from './V1DeleteRouteResponse.ts'

export type HeadscaleServiceDeleteRoutePathParams = {
  /**
   * @type string, uint64
   */
  routeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceDeleteRoute200 = V1DeleteRouteResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDeleteRouteError = RpcStatus

export type HeadscaleServiceDeleteRouteMutationResponse = HeadscaleServiceDeleteRoute200

export type HeadscaleServiceDeleteRouteMutation = {
  Response: HeadscaleServiceDeleteRoute200
  PathParams: HeadscaleServiceDeleteRoutePathParams
  Errors: any
}