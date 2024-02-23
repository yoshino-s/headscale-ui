import type { RpcStatus } from "./RpcStatus";
import type { V1CreatePreAuthKeyRequest } from "./V1CreatePreAuthKeyRequest";
import type { V1CreatePreAuthKeyResponse } from "./V1CreatePreAuthKeyResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceCreatePreAuthKeyError = RpcStatus;

 export type HeadscaleServiceCreatePreAuthKeyMutationRequest = V1CreatePreAuthKeyRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceCreatePreAuthKeyMutationResponse = V1CreatePreAuthKeyResponse;
export type HeadscaleServiceCreatePreAuthKeyMutation = {
    Response: HeadscaleServiceCreatePreAuthKeyMutationResponse;
    Request: HeadscaleServiceCreatePreAuthKeyMutationRequest;
    Errors: HeadscaleServiceCreatePreAuthKeyError;
};