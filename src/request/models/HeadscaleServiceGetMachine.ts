import type { RpcStatus } from "./RpcStatus";
import type { V1GetMachineResponse } from "./V1GetMachineResponse";

export type HeadscaleServiceGetMachinePathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceGetMachineError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceGetMachineQueryResponse = V1GetMachineResponse;
export type HeadscaleServiceGetMachineQuery = {
    Response: HeadscaleServiceGetMachineQueryResponse;
    PathParams: HeadscaleServiceGetMachinePathParams;
    Errors: HeadscaleServiceGetMachineError;
};