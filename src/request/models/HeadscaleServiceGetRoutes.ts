import type { RpcStatus } from './RpcStatus.ts'
import type { V1GetRoutesResponse } from './V1GetRoutesResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceGetRoutes200 = V1GetRoutesResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceGetRoutesError = RpcStatus

export type HeadscaleServiceGetRoutesQueryResponse = HeadscaleServiceGetRoutes200

export type HeadscaleServiceGetRoutesQuery = {
  Response: HeadscaleServiceGetRoutes200
  Errors: any
}