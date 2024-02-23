import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceDeleteUserMutationResponse, HeadscaleServiceDeleteUserPathParams } from "../models/HeadscaleServiceDeleteUser";

/**
     * @link /api/v1/user/:name */
export async function headscaleServiceDeleteUser(name: HeadscaleServiceDeleteUserPathParams["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceDeleteUserMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceDeleteUserMutationResponse>({
        method: "delete",
        url: `/api/v1/user/${name}`,
        ...options
    });
    return res.data;
}