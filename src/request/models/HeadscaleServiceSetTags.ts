import type { HeadscaleServiceSetTagsBody } from './HeadscaleServiceSetTagsBody.ts'
import type { RpcStatus } from './RpcStatus.ts'
import type { V1SetTagsResponse } from './V1SetTagsResponse.ts'

export type HeadscaleServiceSetTagsPathParams = {
  /**
   * @type string, uint64
   */
  nodeId: string
}

/**
 * @description A successful response.
 */
export type HeadscaleServiceSetTags200 = V1SetTagsResponse

/**
 * @description An unexpected error response.
 */
export type HeadscaleServiceSetTagsError = RpcStatus

export type HeadscaleServiceSetTagsMutationRequest = HeadscaleServiceSetTagsBody

export type HeadscaleServiceSetTagsMutationResponse = HeadscaleServiceSetTags200

export type HeadscaleServiceSetTagsMutation = {
  Response: HeadscaleServiceSetTags200
  Request: HeadscaleServiceSetTagsMutationRequest
  PathParams: HeadscaleServiceSetTagsPathParams
  Errors: any
}