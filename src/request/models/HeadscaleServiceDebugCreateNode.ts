import type { RpcStatus } from './RpcStatus.ts'
import type { V1DebugCreateNodeRequest } from './V1DebugCreateNodeRequest.ts'
import type { V1DebugCreateNodeResponse } from './V1DebugCreateNodeResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceDebugCreateNode200 = V1DebugCreateNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDebugCreateNodeError = RpcStatus

export type HeadscaleServiceDebugCreateNodeMutationRequest = V1DebugCreateNodeRequest

export type HeadscaleServiceDebugCreateNodeMutationResponse = HeadscaleServiceDebugCreateNode200

export type HeadscaleServiceDebugCreateNodeMutation = {
  Response: HeadscaleServiceDebugCreateNode200
  Request: HeadscaleServiceDebugCreateNodeMutationRequest
  Errors: any
}