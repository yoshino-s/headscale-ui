import type { RpcStatus } from "./RpcStatus";
import type { V1DebugCreateMachineRequest } from "./V1DebugCreateMachineRequest";
import type { V1DebugCreateMachineResponse } from "./V1DebugCreateMachineResponse";

/**
 * @description An unexpected error response.
*/
export type HeadscaleServiceDebugCreateMachineError = RpcStatus;

 export type HeadscaleServiceDebugCreateMachineMutationRequest = V1DebugCreateMachineRequest;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceDebugCreateMachineMutationResponse = V1DebugCreateMachineResponse;
export type HeadscaleServiceDebugCreateMachineMutation = {
    Response: HeadscaleServiceDebugCreateMachineMutationResponse;
    Request: HeadscaleServiceDebugCreateMachineMutationRequest;
    Errors: HeadscaleServiceDebugCreateMachineError;
};