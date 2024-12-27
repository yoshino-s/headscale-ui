import type { RpcStatus } from './RpcStatus.ts'
import type { V1ExpireApiKeyRequest } from './V1ExpireApiKeyRequest.ts'
import type { V1ExpireApiKeyResponse } from './V1ExpireApiKeyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceExpireApiKey200 = V1ExpireApiKeyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceExpireApiKeyError = RpcStatus

export type HeadscaleServiceExpireApiKeyMutationRequest = V1ExpireApiKeyRequest

export type HeadscaleServiceExpireApiKeyMutationResponse = HeadscaleServiceExpireApiKey200

export type HeadscaleServiceExpireApiKeyMutation = {
  Response: HeadscaleServiceExpireApiKey200
  Request: HeadscaleServiceExpireApiKeyMutationRequest
  Errors: any
}