import type { RpcStatus } from './RpcStatus.ts'
import type { V1CreatePreAuthKeyRequest } from './V1CreatePreAuthKeyRequest.ts'
import type { V1CreatePreAuthKeyResponse } from './V1CreatePreAuthKeyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceCreatePreAuthKey200 = V1CreatePreAuthKeyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceCreatePreAuthKeyError = RpcStatus

export type HeadscaleServiceCreatePreAuthKeyMutationRequest = V1CreatePreAuthKeyRequest

export type HeadscaleServiceCreatePreAuthKeyMutationResponse = HeadscaleServiceCreatePreAuthKey200

export type HeadscaleServiceCreatePreAuthKeyMutation = {
  Response: HeadscaleServiceCreatePreAuthKey200
  Request: HeadscaleServiceCreatePreAuthKeyMutationRequest
  Errors: any
}