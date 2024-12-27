import type { RpcStatus } from './RpcStatus.ts'
import type { V1ListPreAuthKeysResponse } from './V1ListPreAuthKeysResponse.ts'

export type HeadscaleServiceListPreAuthKeysQueryParams = {
  /**
   * @type string | undefined
   */
  user?: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceListPreAuthKeys200 = V1ListPreAuthKeysResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceListPreAuthKeysError = RpcStatus

export type HeadscaleServiceListPreAuthKeysQueryResponse = HeadscaleServiceListPreAuthKeys200

export type HeadscaleServiceListPreAuthKeysQuery = {
  Response: HeadscaleServiceListPreAuthKeys200
  QueryParams: HeadscaleServiceListPreAuthKeysQueryParams
  Errors: any
}