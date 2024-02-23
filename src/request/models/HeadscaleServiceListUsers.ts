import type { RpcStatus } from "./RpcStatus";
import type { V1ListUsersResponse } from "./V1ListUsersResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceListUsersError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceListUsersQueryResponse = V1ListUsersResponse;
export type HeadscaleServiceListUsersQuery = {
    Response: HeadscaleServiceListUsersQueryResponse;
    Errors: HeadscaleServiceListUsersError;
};