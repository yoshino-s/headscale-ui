import type { RpcStatus } from "./RpcStatus";
import type { V1CreateUserRequest } from "./V1CreateUserRequest";
import type { V1CreateUserResponse } from "./V1CreateUserResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceCreateUserError = RpcStatus;

 export type HeadscaleServiceCreateUserMutationRequest = V1CreateUserRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceCreateUserMutationResponse = V1CreateUserResponse;
export type HeadscaleServiceCreateUserMutation = {
    Response: HeadscaleServiceCreateUserMutationResponse;
    Request: HeadscaleServiceCreateUserMutationRequest;
    Errors: HeadscaleServiceCreateUserError;
};