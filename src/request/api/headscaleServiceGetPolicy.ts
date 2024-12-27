import client from '@/utils/client'
import type { HeadscaleServiceGetPolicyQueryResponse } from '../models/HeadscaleServiceGetPolicy.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * @summary --- Policy start ---
 * {@link /api/v1/policy}
 */
export async function headscaleServiceGetPolicy(config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceGetPolicyQueryResponse, Error, unknown>({ method: 'GET', url: `/api/v1/policy`, ...config })
  return res.data
}