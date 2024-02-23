import type { RpcStatus } from "./RpcStatus";
import type { V1GetUserResponse } from "./V1GetUserResponse";

export type HeadscaleServiceGetUserPathParams = {
    /**
     * @type string
    */
    name: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceGetUserError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceGetUserQueryResponse = V1GetUserResponse;
export type HeadscaleServiceGetUserQuery = {
    Response: HeadscaleServiceGetUserQueryResponse;
    PathParams: HeadscaleServiceGetUserPathParams;
    Errors: HeadscaleServiceGetUserError;
};