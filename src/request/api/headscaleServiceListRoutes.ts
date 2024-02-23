import type { ResponseConfig } from "@kubb/swagger-client/client";
import client from "@kubb/swagger-client/client";
import type { HeadscaleServiceGetMachineRoutesPathParams } from "../models/HeadscaleServiceGetMachineRoutes";
import type { HeadscaleServiceGetRoutesQueryResponse } from "../models/HeadscaleServiceGetRoutes";
import { headscaleServiceGetMachineRoutes } from "./headscaleServiceGetMachineRoutes";
import { headscaleServiceGetRoutes } from "./headscaleServiceGetRoutes";

interface Params {
    machineId?: HeadscaleServiceGetMachineRoutesPathParams["machineId"]
}


export async function headscaleServiceListRoutes({ machineId }: Params, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceGetRoutesQueryResponse>["data"]> {
    if (!machineId) {
        return headscaleServiceGetRoutes(options);
    } else {
        return headscaleServiceGetMachineRoutes(machineId, options);
    }
}