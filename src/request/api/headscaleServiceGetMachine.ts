import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceGetMachineQueryResponse, HeadscaleServiceGetMachinePathParams } from "../models/HeadscaleServiceGetMachine";

/**
     * @link /api/v1/machine/:machineId */
export async function headscaleServiceGetMachine(machineId: HeadscaleServiceGetMachinePathParams["machineId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceGetMachineQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceGetMachineQueryResponse>({
        method: "get",
        url: `/api/v1/machine/${machineId}`,
        ...options
    });
    return res.data;
}