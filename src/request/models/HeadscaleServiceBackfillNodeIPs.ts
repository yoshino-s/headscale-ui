import type { RpcStatus } from './RpcStatus.ts'
import type { V1BackfillNodeIPsResponse } from './V1BackfillNodeIPsResponse.ts'

export type HeadscaleServiceBackfillNodeIPsQueryParams = {
  /**
   * @type boolean | undefined
   */
  confirmed?: boolean
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceBackfillNodeIPs200 = V1BackfillNodeIPsResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceBackfillNodeIPsError = RpcStatus

export type HeadscaleServiceBackfillNodeIPsMutationResponse = HeadscaleServiceBackfillNodeIPs200

export type HeadscaleServiceBackfillNodeIPsMutation = {
  Response: HeadscaleServiceBackfillNodeIPs200
  QueryParams: HeadscaleServiceBackfillNodeIPsQueryParams
  Errors: any
}