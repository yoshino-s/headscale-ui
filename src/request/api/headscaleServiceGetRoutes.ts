import client from '@/utils/client'
import type { HeadscaleServiceGetRoutesQueryResponse } from '../models/HeadscaleServiceGetRoutes.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- Route start ---
 * {@link /api/v1/routes}
 */
export async function headscaleServiceGetRoutes(config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceGetRoutesQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/routes`, ...config })
  return res.data
}