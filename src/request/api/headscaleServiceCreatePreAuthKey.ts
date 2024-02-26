import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceCreatePreAuthKeyMutationRequest, HeadscaleServiceCreatePreAuthKeyMutationResponse } from "../models/HeadscaleServiceCreatePreAuthKey";

/**
     * @summary --- PreAuthKeys start ---
     * @link /api/v1/preauthkey */
export async function headscaleServiceCreatePreAuthKey(data?: HeadscaleServiceCreatePreAuthKeyMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceCreatePreAuthKeyMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceCreatePreAuthKeyMutationResponse, HeadscaleServiceCreatePreAuthKeyMutationRequest>({
        method: "post",
        url: `/api/v1/preauthkey`,
        data,
        ...options
    });
    return res.data;
}