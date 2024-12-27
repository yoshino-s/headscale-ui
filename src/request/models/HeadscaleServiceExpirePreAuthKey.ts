import type { RpcStatus } from './RpcStatus.ts'
import type { V1ExpirePreAuthKeyRequest } from './V1ExpirePreAuthKeyRequest.ts'
import type { V1ExpirePreAuthKeyResponse } from './V1ExpirePreAuthKeyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceExpirePreAuthKey200 = V1ExpirePreAuthKeyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceExpirePreAuthKeyError = RpcStatus

export type HeadscaleServiceExpirePreAuthKeyMutationRequest = V1ExpirePreAuthKeyRequest

export type HeadscaleServiceExpirePreAuthKeyMutationResponse = HeadscaleServiceExpirePreAuthKey200

export type HeadscaleServiceExpirePreAuthKeyMutation = {
  Response: HeadscaleServiceExpirePreAuthKey200
  Request: HeadscaleServiceExpirePreAuthKeyMutationRequest
  Errors: any
}