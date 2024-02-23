import type { RpcStatus } from "./RpcStatus";
import type { V1MoveMachineResponse } from "./V1MoveMachineResponse";

export type HeadscaleServiceMoveMachinePathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 export type HeadscaleServiceMoveMachineQueryParams = {
    /**
     * @type string | undefined
    */
    user?: string;
} | undefined;

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceMoveMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceMoveMachineMutationResponse = V1MoveMachineResponse;
export type HeadscaleServiceMoveMachineMutation = {
    Response: HeadscaleServiceMoveMachineMutationResponse;
    PathParams: HeadscaleServiceMoveMachinePathParams;
    QueryParams: HeadscaleServiceMoveMachineQueryParams;
    Errors: HeadscaleServiceMoveMachineError;
};