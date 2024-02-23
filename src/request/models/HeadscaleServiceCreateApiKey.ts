import type { RpcStatus } from "./RpcStatus";
import type { V1CreateApiKeyRequest } from "./V1CreateApiKeyRequest";
import type { V1CreateApiKeyResponse } from "./V1CreateApiKeyResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceCreateApiKeyError = RpcStatus;

 export type HeadscaleServiceCreateApiKeyMutationRequest = V1CreateApiKeyRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceCreateApiKeyMutationResponse = V1CreateApiKeyResponse;
export type HeadscaleServiceCreateApiKeyMutation = {
    Response: HeadscaleServiceCreateApiKeyMutationResponse;
    Request: HeadscaleServiceCreateApiKeyMutationRequest;
    Errors: HeadscaleServiceCreateApiKeyError;
};