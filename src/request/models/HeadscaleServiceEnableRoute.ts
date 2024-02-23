import type { RpcStatus } from "./RpcStatus";
import type { V1EnableRouteResponse } from "./V1EnableRouteResponse";

export type HeadscaleServiceEnableRoutePathParams = {
    /**
     * @type string uint64
    */
    routeId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceEnableRouteError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceEnableRouteMutationResponse = V1EnableRouteResponse;
export type HeadscaleServiceEnableRouteMutation = {
    Response: HeadscaleServiceEnableRouteMutationResponse;
    PathParams: HeadscaleServiceEnableRoutePathParams;
    Errors: HeadscaleServiceEnableRouteError;
};