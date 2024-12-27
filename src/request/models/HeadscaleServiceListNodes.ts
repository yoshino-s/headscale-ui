import type { RpcStatus } from './RpcStatus.ts'
import type { V1ListNodesResponse } from './V1ListNodesResponse.ts'

export type HeadscaleServiceListNodesQueryParams = {
  /**
   * @type string | undefined
   */
  user?: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceListNodes200 = V1ListNodesResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceListNodesError = RpcStatus

export type HeadscaleServiceListNodesQueryResponse = HeadscaleServiceListNodes200

export type HeadscaleServiceListNodesQuery = {
  Response: HeadscaleServiceListNodes200
  QueryParams: HeadscaleServiceListNodesQueryParams
  Errors: any
}