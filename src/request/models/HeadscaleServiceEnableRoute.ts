import type { RpcStatus } from './RpcStatus.ts'
import type { V1EnableRouteResponse } from './V1EnableRouteResponse.ts'

export type HeadscaleServiceEnableRoutePathParams = {
  /**
   * @type string, uint64
   */
  routeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceEnableRoute200 = V1EnableRouteResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceEnableRouteError = RpcStatus

export type HeadscaleServiceEnableRouteMutationResponse = HeadscaleServiceEnableRoute200

export type HeadscaleServiceEnableRouteMutation = {
  Response: HeadscaleServiceEnableRoute200
  PathParams: HeadscaleServiceEnableRoutePathParams
  Errors: any
}