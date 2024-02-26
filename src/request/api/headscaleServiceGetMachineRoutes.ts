import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceGetMachineRoutesQueryResponse, HeadscaleServiceGetMachineRoutesPathParams } from "../models/HeadscaleServiceGetMachineRoutes";

/**
     * @link /api/v1/machine/:machineId/routes */
export async function headscaleServiceGetMachineRoutes(machineId: HeadscaleServiceGetMachineRoutesPathParams["machineId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceGetMachineRoutesQueryResponse>["data"]> {
    const res = await client<HeadscaleServiceGetMachineRoutesQueryResponse>({
        method: "get",
        url: `/api/v1/machine/${machineId}/routes`,
        ...options
    });
    return res.data;
}