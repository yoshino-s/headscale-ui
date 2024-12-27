import client from '@/utils/client'
import type { HeadscaleServiceRenameUserMutationResponse, HeadscaleServiceRenameUserPathParams } from '../models/HeadscaleServiceRenameUser.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/user/:oldName/rename/:newName}
 */
export async function headscaleServiceRenameUser(
  oldName: HeadscaleServiceRenameUserPathParams['oldName'],
  newName: HeadscaleServiceRenameUserPathParams['newName'],
  config: Partial<RequestConfig> = {},
) {
  const res = await client<HeadscaleServiceRenameUserMutationResponse, Error, unknown>({
    method: 'POST',
    url: `/api/v1/user/${oldName}/rename/${newName}`,
    ...config,
  })
  return res.data
}