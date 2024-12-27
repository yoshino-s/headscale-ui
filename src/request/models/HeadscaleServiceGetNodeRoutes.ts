import type { RpcStatus } from './RpcStatus.ts'
import type { V1GetNodeRoutesResponse } from './V1GetNodeRoutesResponse.ts'

export type HeadscaleServiceGetNodeRoutesPathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceGetNodeRoutes200 = V1GetNodeRoutesResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceGetNodeRoutesError = RpcStatus

export type HeadscaleServiceGetNodeRoutesQueryResponse = HeadscaleServiceGetNodeRoutes200

export type HeadscaleServiceGetNodeRoutesQuery = {
  Response: HeadscaleServiceGetNodeRoutes200
  PathParams: HeadscaleServiceGetNodeRoutesPathParams
  Errors: any
}