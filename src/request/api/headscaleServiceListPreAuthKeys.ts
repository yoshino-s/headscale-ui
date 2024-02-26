import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceListPreAuthKeysQueryResponse, HeadscaleServiceListPreAuthKeysQueryParams } from "../models/HeadscaleServiceListPreAuthKeys";

/**
     * @link /api/v1/preauthkey */
export async function headscaleServiceListPreAuthKeys(params?: HeadscaleServiceListPreAuthKeysQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceListPreAuthKeysQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceListPreAuthKeysQueryResponse>({
        method: "get",
        url: `/api/v1/preauthkey`,
        params,
        ...options
    });
    return res.data;
}