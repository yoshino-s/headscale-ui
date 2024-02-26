import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceDebugCreateMachineMutationRequest, HeadscaleServiceDebugCreateMachineMutationResponse } from "../models/HeadscaleServiceDebugCreateMachine";

/**
     * @summary --- Machine start ---
     * @link /api/v1/debug/machine */
export async function headscaleServiceDebugCreateMachine(data?: HeadscaleServiceDebugCreateMachineMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceDebugCreateMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceDebugCreateMachineMutationResponse, HeadscaleServiceDebugCreateMachineMutationRequest>({
        method: "post",
        url: `/api/v1/debug/machine`,
        data,
        ...options
    });
    return res.data;
}