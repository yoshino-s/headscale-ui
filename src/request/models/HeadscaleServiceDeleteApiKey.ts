import type { RpcStatus } from './RpcStatus.ts'
import type { V1DeleteApiKeyResponse } from './V1DeleteApiKeyResponse.ts'

export type HeadscaleServiceDeleteApiKeyPathParams = {
  /**
   * @type string
   */
  prefix: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceDeleteApiKey200 = V1DeleteApiKeyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceDeleteApiKeyError = RpcStatus

export type HeadscaleServiceDeleteApiKeyMutationResponse = HeadscaleServiceDeleteApiKey200

export type HeadscaleServiceDeleteApiKeyMutation = {
  Response: HeadscaleServiceDeleteApiKey200
  PathParams: HeadscaleServiceDeleteApiKeyPathParams
  Errors: any
}