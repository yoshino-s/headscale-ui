import type { RpcStatus } from './RpcStatus.ts'
import type { V1CreateUserRequest } from './V1CreateUserRequest.ts'
import type { V1CreateUserResponse } from './V1CreateUserResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceCreateUser200 = V1CreateUserResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceCreateUserError = RpcStatus

export type HeadscaleServiceCreateUserMutationRequest = V1CreateUserRequest

export type HeadscaleServiceCreateUserMutationResponse = HeadscaleServiceCreateUser200

export type HeadscaleServiceCreateUserMutation = {
  Response: HeadscaleServiceCreateUser200
  Request: HeadscaleServiceCreateUserMutationRequest
  Errors: any
}