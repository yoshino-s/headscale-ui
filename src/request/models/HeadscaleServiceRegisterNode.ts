import type { RpcStatus } from './RpcStatus.ts'
import type { V1RegisterNodeResponse } from './V1RegisterNodeResponse.ts'

export type HeadscaleServiceRegisterNodeQueryParams = {
  /**
   * @type string | undefined
   */
  user?: string
  /**
   * @type string | undefined
   */
  key?: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceRegisterNode200 = V1RegisterNodeResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceRegisterNodeError = RpcStatus

export type HeadscaleServiceRegisterNodeMutationResponse = HeadscaleServiceRegisterNode200

export type HeadscaleServiceRegisterNodeMutation = {
  Response: HeadscaleServiceRegisterNode200
  QueryParams: HeadscaleServiceRegisterNodeQueryParams
  Errors: any
}