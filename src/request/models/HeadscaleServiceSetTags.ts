import type { RpcStatus } from "./RpcStatus";
import type { V1SetTagsResponse } from "./V1SetTagsResponse";

export type HeadscaleServiceSetTagsMutationRequest = {
    /**
     * @type array | undefined
    */
    tags?: string[];
};

 export type HeadscaleServiceSetTagsPathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceSetTagsError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceSetTagsMutationResponse = V1SetTagsResponse;
export type HeadscaleServiceSetTagsMutation = {
    Response: HeadscaleServiceSetTagsMutationResponse;
    Request: HeadscaleServiceSetTagsMutationRequest;
    PathParams: HeadscaleServiceSetTagsPathParams;
    Errors: HeadscaleServiceSetTagsError;
};