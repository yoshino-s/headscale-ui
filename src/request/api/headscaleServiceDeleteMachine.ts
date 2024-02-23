import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceDeleteMachineMutationResponse, HeadscaleServiceDeleteMachinePathParams } from "../models/HeadscaleServiceDeleteMachine";

/**
     * @link /api/v1/machine/:machineId */
export async function headscaleServiceDeleteMachine(machineId: HeadscaleServiceDeleteMachinePathParams["machineId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceDeleteMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceDeleteMachineMutationResponse>({
        method: "delete",
        url: `/api/v1/machine/${machineId}`,
        ...options
    });
    return res.data;
}