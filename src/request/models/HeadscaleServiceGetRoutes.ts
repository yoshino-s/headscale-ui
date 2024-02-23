import type { RpcStatus } from "./RpcStatus";
import type { V1GetRoutesResponse } from "./V1GetRoutesResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceGetRoutesError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceGetRoutesQueryResponse = V1GetRoutesResponse;
export type HeadscaleServiceGetRoutesQuery = {
    Response: HeadscaleServiceGetRoutesQueryResponse;
    Errors: HeadscaleServiceGetRoutesError;
};