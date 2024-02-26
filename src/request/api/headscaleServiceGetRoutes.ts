import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceGetRoutesQueryResponse } from "../models/HeadscaleServiceGetRoutes";

/**
     * @summary --- Route start ---
     * @link /api/v1/routes */
export async function headscaleServiceGetRoutes(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceGetRoutesQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceGetRoutesQueryResponse>({
        method: "get",
        url: `/api/v1/routes`,
        ...options
    });
    return res.data;
}