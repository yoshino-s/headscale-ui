import type { RpcStatus } from './RpcStatus.ts'
import type { V1GetUserResponse } from './V1GetUserResponse.ts'

export type HeadscaleServiceGetUserPathParams = {
  /**
   * @type string
   */
  name: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceGetUser200 = V1GetUserResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceGetUserError = RpcStatus

export type HeadscaleServiceGetUserQueryResponse = HeadscaleServiceGetUser200

export type HeadscaleServiceGetUserQuery = {
  Response: HeadscaleServiceGetUser200
  PathParams: HeadscaleServiceGetUserPathParams
  Errors: any
}