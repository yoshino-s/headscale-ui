import type { RpcStatus } from "./RpcStatus";
import type { V1ExpireApiKeyRequest } from "./V1ExpireApiKeyRequest";
import type { V1ExpireApiKeyResponse } from "./V1ExpireApiKeyResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceExpireApiKeyError = RpcStatus;

 export type HeadscaleServiceExpireApiKeyMutationRequest = V1ExpireApiKeyRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceExpireApiKeyMutationResponse = V1ExpireApiKeyResponse;
export type HeadscaleServiceExpireApiKeyMutation = {
    Response: HeadscaleServiceExpireApiKeyMutationResponse;
    Request: HeadscaleServiceExpireApiKeyMutationRequest;
    Errors: HeadscaleServiceExpireApiKeyError;
};