import client from "@/utils/client";
import type { ResponseConfig } from "@/utils/client";
import type { HeadscaleServiceRenameUserMutationResponse, HeadscaleServiceRenameUserPathParams } from "../models/HeadscaleServiceRenameUser";

/**
     * @link /api/v1/user/:oldName/rename/:newName */
export async function headscaleServiceRenameUser(oldName: HeadscaleServiceRenameUserPathParams["oldName"], newName: HeadscaleServiceRenameUserPathParams["newName"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<HeadscaleServiceRenameUserMutationResponse>["data"]> {
    const res = await client<HeadscaleServiceRenameUserMutationResponse>({
        method: "post",
        url: `/api/v1/user/${oldName}/rename/${newName}`,
        ...options
    });
    return res.data;
}