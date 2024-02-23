import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceEnableRouteMutationResponse, HeadscaleServiceEnableRoutePathParams } from "../models/HeadscaleServiceEnableRoute";

/**
     * @link /api/v1/routes/:routeId/enable */
export async function headscaleServiceEnableRoute(routeId: HeadscaleServiceEnableRoutePathParams["routeId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceEnableRouteMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceEnableRouteMutationResponse>({
        method: "post",
        url: `/api/v1/routes/${routeId}/enable`,
        ...options
    });
    return res.data;
}