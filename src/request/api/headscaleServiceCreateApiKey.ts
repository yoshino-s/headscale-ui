import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceCreateApiKeyMutationRequest, HeadscaleServiceCreateApiKeyMutationResponse } from "../models/HeadscaleServiceCreateApiKey";

/**
     * @summary --- ApiKeys start ---
     * @link /api/v1/apikey */
export async function headscaleServiceCreateApiKey(data?: HeadscaleServiceCreateApiKeyMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceCreateApiKeyMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceCreateApiKeyMutationResponse, HeadscaleServiceCreateApiKeyMutationRequest>({
        method: "post",
        url: `/api/v1/apikey`,
        data,
        ...options
    });
    return res.data;
}