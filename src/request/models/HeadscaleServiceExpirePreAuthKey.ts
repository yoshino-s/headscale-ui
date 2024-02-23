import type { RpcStatus } from "./RpcStatus";
import type { V1ExpirePreAuthKeyRequest } from "./V1ExpirePreAuthKeyRequest";
import type { V1ExpirePreAuthKeyResponse } from "./V1ExpirePreAuthKeyResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceExpirePreAuthKeyError = RpcStatus;

 export type HeadscaleServiceExpirePreAuthKeyMutationRequest = V1ExpirePreAuthKeyRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceExpirePreAuthKeyMutationResponse = V1ExpirePreAuthKeyResponse;
export type HeadscaleServiceExpirePreAuthKeyMutation = {
    Response: HeadscaleServiceExpirePreAuthKeyMutationResponse;
    Request: HeadscaleServiceExpirePreAuthKeyMutationRequest;
    Errors: HeadscaleServiceExpirePreAuthKeyError;
};