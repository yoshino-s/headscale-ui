import type { RpcStatus } from './RpcStatus.ts'
import type { V1DeleteNodeResponse } from './V1DeleteNodeResponse.ts'

export type HeadscaleServiceDeleteNodePathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceDeleteNode200 = V1DeleteNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDeleteNodeError = RpcStatus

export type HeadscaleServiceDeleteNodeMutationResponse = HeadscaleServiceDeleteNode200

export type HeadscaleServiceDeleteNodeMutation = {
  Response: HeadscaleServiceDeleteNode200
  PathParams: HeadscaleServiceDeleteNodePathParams
  Errors: any
}