import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceDeleteRouteMutationResponse, HeadscaleServiceDeleteRoutePathParams } from "../models/HeadscaleServiceDeleteRoute";

/**
     * @link /api/v1/routes/:routeId */
export async function headscaleServiceDeleteRoute(routeId: HeadscaleServiceDeleteRoutePathParams["routeId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceDeleteRouteMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceDeleteRouteMutationResponse>({
        method: "delete",
        url: `/api/v1/routes/${routeId}`,
        ...options
    });
    return res.data;
}