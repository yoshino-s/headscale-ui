import type { RpcStatus } from "./RpcStatus";
import type { V1GetMachineRoutesResponse } from "./V1GetMachineRoutesResponse";

export type HeadscaleServiceGetMachineRoutesPathParams = {
    /**
     * @type string uint64
    */
    machineId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceGetMachineRoutesError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceGetMachineRoutesQueryResponse = V1GetMachineRoutesResponse;
export type HeadscaleServiceGetMachineRoutesQuery = {
    Response: HeadscaleServiceGetMachineRoutesQueryResponse;
    PathParams: HeadscaleServiceGetMachineRoutesPathParams;
    Errors: HeadscaleServiceGetMachineRoutesError;
};