import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceMoveMachineMutationResponse, HeadscaleServiceMoveMachinePathParams, HeadscaleServiceMoveMachineQueryParams } from "../models/HeadscaleServiceMoveMachine";

/**
     * @link /api/v1/machine/:machineId/user */
export async function headscaleServiceMoveMachine(machineId: HeadscaleServiceMoveMachinePathParams["machineId"], params?: HeadscaleServiceMoveMachineQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceMoveMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceMoveMachineMutationResponse>({
        method: "post",
        url: `/api/v1/machine/${machineId}/user`,
        params,
        ...options
    });
    return res.data;
}