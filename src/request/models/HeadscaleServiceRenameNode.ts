import type { RpcStatus } from './RpcStatus.ts'
import type { V1RenameNodeResponse } from './V1RenameNodeResponse.ts'

export type HeadscaleServiceRenameNodePathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
  /**
   * @type string
   */
  newName: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceRenameNode200 = V1RenameNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceRenameNodeError = RpcStatus

export type HeadscaleServiceRenameNodeMutationResponse = HeadscaleServiceRenameNode200

export type HeadscaleServiceRenameNodeMutation = {
  Response: HeadscaleServiceRenameNode200
  PathParams: HeadscaleServiceRenameNodePathParams
  Errors: any
}