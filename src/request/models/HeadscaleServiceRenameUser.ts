import type { RpcStatus } from "./RpcStatus";
import type { V1RenameUserResponse } from "./V1RenameUserResponse";

export type HeadscaleServiceRenameUserPathParams = {
    /**
     * @type string
    */
    oldName: string;
    /**
     * @type string
    */
    newName: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceRenameUserError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceRenameUserMutationResponse = V1RenameUserResponse;
export type HeadscaleServiceRenameUserMutation = {
    Response: HeadscaleServiceRenameUserMutationResponse;
    PathParams: HeadscaleServiceRenameUserPathParams;
    Errors: HeadscaleServiceRenameUserError;
};