import type { RpcStatus } from "./RpcStatus";
import type { V1DeleteUserResponse } from "./V1DeleteUserResponse";

export type HeadscaleServiceDeleteUserPathParams = {
    /**
     * @type string
    */
    name: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceDeleteUserError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceDeleteUserMutationResponse = V1DeleteUserResponse;
export type HeadscaleServiceDeleteUserMutation = {
    Response: HeadscaleServiceDeleteUserMutationResponse;
    PathParams: HeadscaleServiceDeleteUserPathParams;
    Errors: HeadscaleServiceDeleteUserError;
};