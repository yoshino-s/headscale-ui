import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceRenameMachineMutationResponse, HeadscaleServiceRenameMachinePathParams } from "../models/HeadscaleServiceRenameMachine";

/**
     * @link /api/v1/machine/:machineId/rename/:newName */
export async function headscaleServiceRenameMachine(machineId: HeadscaleServiceRenameMachinePathParams["machineId"], newName: HeadscaleServiceRenameMachinePathParams["newName"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceRenameMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceRenameMachineMutationResponse>({
        method: "post",
        url: `/api/v1/machine/${machineId}/rename/${newName}`,
        ...options
    });
    return res.data;
}