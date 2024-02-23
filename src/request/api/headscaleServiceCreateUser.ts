import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceCreateUserMutationRequest, HeadscaleServiceCreateUserMutationResponse } from "../models/HeadscaleServiceCreateUser";

/**
     * @link /api/v1/user */
export async function headscaleServiceCreateUser(data?: HeadscaleServiceCreateUserMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceCreateUserMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceCreateUserMutationResponse, HeadscaleServiceCreateUserMutationRequest>({
        method: "post",
        url: `/api/v1/user`,
        data,
        ...options
    });
    return res.data;
}