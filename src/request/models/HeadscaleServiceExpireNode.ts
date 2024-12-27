import type { RpcStatus } from './RpcStatus.ts'
import type { V1ExpireNodeResponse } from './V1ExpireNodeResponse.ts'

export type HeadscaleServiceExpireNodePathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceExpireNode200 = V1ExpireNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceExpireNodeError = RpcStatus

export type HeadscaleServiceExpireNodeMutationResponse = HeadscaleServiceExpireNode200

export type HeadscaleServiceExpireNodeMutation = {
  Response: HeadscaleServiceExpireNode200
  PathParams: HeadscaleServiceExpireNodePathParams
  Errors: any
}