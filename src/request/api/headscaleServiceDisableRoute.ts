import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceDisableRouteMutationResponse, HeadscaleServiceDisableRoutePathParams } from "../models/HeadscaleServiceDisableRoute";

/**
     * @link /api/v1/routes/:routeId/disable */
export async function headscaleServiceDisableRoute(routeId: HeadscaleServiceDisableRoutePathParams["routeId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceDisableRouteMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceDisableRouteMutationResponse>({
        method: "post",
        url: `/api/v1/routes/${routeId}/disable`,
        ...options
    });
    return res.data;
}