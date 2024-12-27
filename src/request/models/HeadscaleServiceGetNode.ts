import type { RpcStatus } from './RpcStatus.ts'
import type { V1GetNodeResponse } from './V1GetNodeResponse.ts'

export type HeadscaleServiceGetNodePathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceGetNode200 = V1GetNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceGetNodeError = RpcStatus

export type HeadscaleServiceGetNodeQueryResponse = HeadscaleServiceGetNode200

export type HeadscaleServiceGetNodeQuery = {
  Response: HeadscaleServiceGetNode200
  PathParams: HeadscaleServiceGetNodePathParams
  Errors: any
}