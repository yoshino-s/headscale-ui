import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceGetUserQueryResponse, HeadscaleServiceGetUserPathParams } from "../models/HeadscaleServiceGetUser";

/**
     * @summary --- User start ---
     * @link /api/v1/user/:name */
export async function headscaleServiceGetUser(name: HeadscaleServiceGetUserPathParams["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceGetUserQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceGetUserQueryResponse>({
        method: "get",
        url: `/api/v1/user/${name}`,
        ...options
    });
    return res.data;
}