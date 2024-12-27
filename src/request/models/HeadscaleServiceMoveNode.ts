import type { RpcStatus } from './RpcStatus.ts'
import type { V1MoveNodeResponse } from './V1MoveNodeResponse.ts'

export type HeadscaleServiceMoveNodePathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

export type HeadscaleServiceMoveNodeQueryParams = {
  /**
   * @type string | undefined
   */
  user?: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceMoveNode200 = V1MoveNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceMoveNodeError = RpcStatus

export type HeadscaleServiceMoveNodeMutationResponse = HeadscaleServiceMoveNode200

export type HeadscaleServiceMoveNodeMutation = {
  Response: HeadscaleServiceMoveNode200
  PathParams: HeadscaleServiceMoveNodePathParams
  QueryParams: HeadscaleServiceMoveNodeQueryParams
  Errors: any
}