import type { RpcStatus } from "./RpcStatus";
import type { V1ListMachinesResponse } from "./V1ListMachinesResponse";

export type HeadscaleServiceListMachinesQueryParams = {
    /**
     * @type string | undefined
    */
    user?: string;
} | undefined;

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceListMachinesError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceListMachinesQueryResponse = V1ListMachinesResponse;
export type HeadscaleServiceListMachinesQuery = {
    Response: HeadscaleServiceListMachinesQueryResponse;
    QueryParams: HeadscaleServiceListMachinesQueryParams;
    Errors: HeadscaleServiceListMachinesError;
};