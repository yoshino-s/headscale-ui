import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceExpirePreAuthKeyMutationRequest, HeadscaleServiceExpirePreAuthKeyMutationResponse } from "../models/HeadscaleServiceExpirePreAuthKey";

/**
     * @link /api/v1/preauthkey/expire */
export async function headscaleServiceExpirePreAuthKey(data?: HeadscaleServiceExpirePreAuthKeyMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceExpirePreAuthKeyMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceExpirePreAuthKeyMutationResponse, HeadscaleServiceExpirePreAuthKeyMutationRequest>({
        method: "post",
        url: `/api/v1/preauthkey/expire`,
        data,
        ...options
    });
    return res.data;
}