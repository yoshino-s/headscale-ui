import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceExpireMachineMutationResponse, HeadscaleServiceExpireMachinePathParams } from "../models/HeadscaleServiceExpireMachine";

/**
     * @link /api/v1/machine/:machineId/expire */
export async function headscaleServiceExpireMachine(machineId: HeadscaleServiceExpireMachinePathParams["machineId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceExpireMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceExpireMachineMutationResponse>({
        method: "post",
        url: `/api/v1/machine/${machineId}/expire`,
        ...options
    });
    return res.data;
}