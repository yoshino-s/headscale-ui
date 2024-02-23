import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceListUsersQueryResponse } from "../models/HeadscaleServiceListUsers";

/**
     * @link /api/v1/user */
export async function headscaleServiceListUsers(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceListUsersQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceListUsersQueryResponse>({
        method: "get",
        url: `/api/v1/user`,
        ...options
    });
    return res.data;
}