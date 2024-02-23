import type { RpcStatus } from "./RpcStatus";
import type { V1RegisterMachineResponse } from "./V1RegisterMachineResponse";

export type HeadscaleServiceRegisterMachineQueryParams = {
    /**
     * @type string | undefined
    */
    user?: string;
    /**
     * @type string | undefined
    */
    key?: string;
} | undefined;

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceRegisterMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceRegisterMachineMutationResponse = V1RegisterMachineResponse;
export type HeadscaleServiceRegisterMachineMutation = {
    Response: HeadscaleServiceRegisterMachineMutationResponse;
    QueryParams: HeadscaleServiceRegisterMachineQueryParams;
    Errors: HeadscaleServiceRegisterMachineError;
};