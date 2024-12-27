import client from '@/utils/client'
import type { HeadscaleServiceBackfillNodeIPsMutationResponse, HeadscaleServiceBackfillNodeIPsQueryParams } from '../models/HeadscaleServiceBackfillNodeIPs.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/node/backfillips}
 */
export async function headscaleServiceBackfillNodeIPs(params?: HeadscaleServiceBackfillNodeIPsQueryParams, config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceBackfillNodeIPsMutationResponse, Error, unknown>({
    method: 'POST',
    url: `/api/v1/node/backfillips`,
    params,
    ...config,
  })
  return res.data
}