import type { RpcStatus } from "./RpcStatus";
import type { V1ExpireMachineResponse } from "./V1ExpireMachineResponse";

export type HeadscaleServiceExpireMachinePathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceExpireMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceExpireMachineMutationResponse = V1ExpireMachineResponse;
export type HeadscaleServiceExpireMachineMutation = {
    Response: HeadscaleServiceExpireMachineMutationResponse;
    PathParams: HeadscaleServiceExpireMachinePathParams;
    Errors: HeadscaleServiceExpireMachineError;
};