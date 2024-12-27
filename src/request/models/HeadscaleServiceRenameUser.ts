import type { RpcStatus } from './RpcStatus.ts'
import type { V1RenameUserResponse } from './V1RenameUserResponse.ts'

export type HeadscaleServiceRenameUserPathParams = {
  /**
   * @type string
   */
  oldName: string
  /**
   * @type string
   */
  newName: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceRenameUser200 = V1RenameUserResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceRenameUserError = RpcStatus

export type HeadscaleServiceRenameUserMutationResponse = HeadscaleServiceRenameUser200

export type HeadscaleServiceRenameUserMutation = {
  Response: HeadscaleServiceRenameUser200
  PathParams: HeadscaleServiceRenameUserPathParams
  Errors: any
}