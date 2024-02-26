import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceListMachinesQueryResponse, HeadscaleServiceListMachinesQueryParams } from "../models/HeadscaleServiceListMachines";

/**
     * @link /api/v1/machine */
export async function headscaleServiceListMachines(params?: HeadscaleServiceListMachinesQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceListMachinesQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceListMachinesQueryResponse>({
        method: "get",
        url: `/api/v1/machine`,
        params,
        ...options
    });
    return res.data;
}