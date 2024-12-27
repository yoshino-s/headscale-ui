import type { RpcStatus } from './RpcStatus.ts'
import type { V1GetPolicyResponse } from './V1GetPolicyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceGetPolicy200 = V1GetPolicyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceGetPolicyError = RpcStatus

export type HeadscaleServiceGetPolicyQueryResponse = HeadscaleServiceGetPolicy200

export type HeadscaleServiceGetPolicyQuery = {
  Response: HeadscaleServiceGetPolicy200
  Errors: any
}