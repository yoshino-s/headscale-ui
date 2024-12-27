import type { RpcStatus } from './RpcStatus.ts'
import type { V1ListUsersResponse } from './V1ListUsersResponse.ts'

/**
 * @description A successful response.
 */
export type HeadscaleServiceListUsers200 = V1ListUsersResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceListUsersError = RpcStatus

export type HeadscaleServiceListUsersQueryResponse = HeadscaleServiceListUsers200

export type HeadscaleServiceListUsersQuery = {
  Response: HeadscaleServiceListUsers200
  Errors: any
}