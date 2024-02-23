import type { RpcStatus } from "./RpcStatus";
import type { V1DeleteRouteResponse } from "./V1DeleteRouteResponse";

export type HeadscaleServiceDeleteRoutePathParams = {
    /**
     * @type string uint64
    */
    routeId: string;
};

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceDeleteRouteError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceDeleteRouteMutationResponse = V1DeleteRouteResponse;
export type HeadscaleServiceDeleteRouteMutation = {
    Response: HeadscaleServiceDeleteRouteMutationResponse;
    PathParams: HeadscaleServiceDeleteRoutePathParams;
    Errors: HeadscaleServiceDeleteRouteError;
};