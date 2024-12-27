import type { RpcStatus } from './RpcStatus.ts'
import type { V1ListApiKeysResponse } from './V1ListApiKeysResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceListApiKeys200 = V1ListApiKeysResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceListApiKeysError = RpcStatus

export type HeadscaleServiceListApiKeysQueryResponse = HeadscaleServiceListApiKeys200

export type HeadscaleServiceListApiKeysQuery = {
  Response: HeadscaleServiceListApiKeys200
  Errors: any
}