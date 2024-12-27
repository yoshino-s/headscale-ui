import client from '@/utils/client'
import type { HeadscaleServiceRenameNodeMutationResponse, HeadscaleServiceRenameNodePathParams } from '../models/HeadscaleServiceRenameNode.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/:nodeId/rename/:newName}
 */
export async function headscaleServiceRenameNode(
  nodeId: HeadscaleServiceRenameNodePathParams['nodeId'],
  newName: HeadscaleServiceRenameNodePathParams['newName'],
  config: Partial<RequestConfig> = {},
) {
  const res = await client<HeadscaleServiceRenameNodeMutationResponse, Error, unknown>({
    method: 'POST',
    url: `/api/v1/node/${nodeId}/rename/${newName}`,
    ...config,
  })
  return res.data
}