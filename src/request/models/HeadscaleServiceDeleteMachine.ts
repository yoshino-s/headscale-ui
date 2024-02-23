import type { RpcStatus } from "./RpcStatus";
import type { V1DeleteMachineResponse } from "./V1DeleteMachineResponse";

export type HeadscaleServiceDeleteMachinePathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceDeleteMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceDeleteMachineMutationResponse = V1DeleteMachineResponse;
export type HeadscaleServiceDeleteMachineMutation = {
    Response: HeadscaleServiceDeleteMachineMutationResponse;
    PathParams: HeadscaleServiceDeleteMachinePathParams;
    Errors: HeadscaleServiceDeleteMachineError;
};