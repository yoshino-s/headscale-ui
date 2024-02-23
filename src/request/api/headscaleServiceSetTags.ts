import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceSetTagsMutationRequest, HeadscaleServiceSetTagsMutationResponse, HeadscaleServiceSetTagsPathParams } from "../models/HeadscaleServiceSetTags";

/**
     * @link /api/v1/machine/:machineId/tags */
export async function headscaleServiceSetTags(machineId: HeadscaleServiceSetTagsPathParams["machineId"], data?: HeadscaleServiceSetTagsMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceSetTagsMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceSetTagsMutationResponse, HeadscaleServiceSetTagsMutationRequest>({
        method: "post",
        url: `/api/v1/machine/${machineId}/tags`,
        data,
        ...options
    });
    return res.data;
}