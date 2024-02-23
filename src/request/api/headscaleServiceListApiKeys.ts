import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceListApiKeysQueryResponse } from "../models/HeadscaleServiceListApiKeys";

/**
     * @link /api/v1/apikey */
export async function headscaleServiceListApiKeys(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceListApiKeysQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceListApiKeysQueryResponse>({
        method: "get",
        url: `/api/v1/apikey`,
        ...options
    });
    return res.data;
}