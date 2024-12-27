import type { RpcStatus } from './RpcStatus.ts'
import type { V1DisableRouteResponse } from './V1DisableRouteResponse.ts'

export type HeadscaleServiceDisableRoutePathParams = {
  /**
   * @type string, uint64
   */
  routeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceDisableRoute200 = V1DisableRouteResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDisableRouteError = RpcStatus

export type HeadscaleServiceDisableRouteMutationResponse = HeadscaleServiceDisableRoute200

export type HeadscaleServiceDisableRouteMutation = {
  Response: HeadscaleServiceDisableRoute200
  PathParams: HeadscaleServiceDisableRoutePathParams
  Errors: any
}