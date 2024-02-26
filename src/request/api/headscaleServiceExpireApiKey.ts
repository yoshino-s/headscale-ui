import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceExpireApiKeyMutationRequest, HeadscaleServiceExpireApiKeyMutationResponse } from "../models/HeadscaleServiceExpireApiKey";

/**
     * @link /api/v1/apikey/expire */
export async function headscaleServiceExpireApiKey(data?: HeadscaleServiceExpireApiKeyMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceExpireApiKeyMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceExpireApiKeyMutationResponse, HeadscaleServiceExpireApiKeyMutationRequest>({
        method: "post",
        url: `/api/v1/apikey/expire`,
        data,
        ...options
    });
    return res.data;
}