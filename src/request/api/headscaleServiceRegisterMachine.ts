import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { HeadscaleServiceRegisterMachineMutationResponse, HeadscaleServiceRegisterMachineQueryParams } from "../models/HeadscaleServiceRegisterMachine";

/**
     * @link /api/v1/machine/register */
export async function headscaleServiceRegisterMachine(params?: HeadscaleServiceRegisterMachineQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceRegisterMachineMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceRegisterMachineMutationResponse>({
        method: "post",
        url: `/api/v1/machine/register`,
        params,
        ...options
    });
    return res.data;
}