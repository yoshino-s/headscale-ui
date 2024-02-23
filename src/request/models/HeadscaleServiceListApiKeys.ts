import type { RpcStatus } from "./RpcStatus";
import type { V1ListApiKeysResponse } from "./V1ListApiKeysResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceListApiKeysError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceListApiKeysQueryResponse = V1ListApiKeysResponse;
export type HeadscaleServiceListApiKeysQuery = {
    Response: HeadscaleServiceListApiKeysQueryResponse;
    Errors: HeadscaleServiceListApiKeysError;
};