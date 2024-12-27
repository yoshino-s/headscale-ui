import type { RpcStatus } from './RpcStatus.ts'
import type { V1SetPolicyRequest } from './V1SetPolicyRequest.ts'
import type { V1SetPolicyResponse } from './V1SetPolicyResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceSetPolicy200 = V1SetPolicyResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceSetPolicyError = RpcStatus

export type HeadscaleServiceSetPolicyMutationRequest = V1SetPolicyRequest

export type HeadscaleServiceSetPolicyMutationResponse = HeadscaleServiceSetPolicy200

export type HeadscaleServiceSetPolicyMutation = {
  Response: HeadscaleServiceSetPolicy200
  Request: HeadscaleServiceSetPolicyMutationRequest
  Errors: any
}