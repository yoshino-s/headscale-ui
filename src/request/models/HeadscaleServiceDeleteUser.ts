import type { RpcStatus } from './RpcStatus.ts'
import type { V1DeleteUserResponse } from './V1DeleteUserResponse.ts'

export type HeadscaleServiceDeleteUserPathParams = {
  /**
   * @type string
   */
  name: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceDeleteUser200 = V1DeleteUserResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDeleteUserError = RpcStatus

export type HeadscaleServiceDeleteUserMutationResponse = HeadscaleServiceDeleteUser200

export type HeadscaleServiceDeleteUserMutation = {
  Response: HeadscaleServiceDeleteUser200
  PathParams: HeadscaleServiceDeleteUserPathParams
  Errors: any
}