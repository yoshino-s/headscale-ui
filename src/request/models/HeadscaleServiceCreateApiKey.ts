import type { RpcStatus } from './RpcStatus.ts'
import type { V1CreateApiKeyRequest } from './V1CreateApiKeyRequest.ts'
import type { V1CreateApiKeyResponse } from './V1CreateApiKeyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceCreateApiKey200 = V1CreateApiKeyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceCreateApiKeyError = RpcStatus

export type HeadscaleServiceCreateApiKeyMutationRequest = V1CreateApiKeyRequest

export type HeadscaleServiceCreateApiKeyMutationResponse = HeadscaleServiceCreateApiKey200

export type HeadscaleServiceCreateApiKeyMutation = {
  Response: HeadscaleServiceCreateApiKey200
  Request: HeadscaleServiceCreateApiKeyMutationRequest
  Errors: any
}