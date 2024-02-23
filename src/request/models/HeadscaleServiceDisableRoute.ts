import type { RpcStatus } from "./RpcStatus";
import type { V1DisableRouteResponse } from "./V1DisableRouteResponse";

export type HeadscaleServiceDisableRoutePathParams = {
    /**
     * @type string uint64
    */
    routeId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceDisableRouteError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceDisableRouteMutationResponse = V1DisableRouteResponse;
export type HeadscaleServiceDisableRouteMutation = {
    Response: HeadscaleServiceDisableRouteMutationResponse;
    PathParams: HeadscaleServiceDisableRoutePathParams;
    Errors: HeadscaleServiceDisableRouteError;
};