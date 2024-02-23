import type { RpcStatus } from "./RpcStatus";
import type { V1RenameMachineResponse } from "./V1RenameMachineResponse";

export type HeadscaleServiceRenameMachinePathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
    /**
     * @type string
    */
    newName: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceRenameMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceRenameMachineMutationResponse = V1RenameMachineResponse;
export type HeadscaleServiceRenameMachineMutation = {
    Response: HeadscaleServiceRenameMachineMutationResponse;
    PathParams: HeadscaleServiceRenameMachinePathParams;
    Errors: HeadscaleServiceRenameMachineError;
};