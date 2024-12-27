import client from '@/utils/client'
import type { HeadscaleServiceDeleteApiKeyMutationResponse, HeadscaleServiceDeleteApiKeyPathParams } from '../models/HeadscaleServiceDeleteApiKey.ts'
import type { RequestConfig } from '@/utils/client'

/**
 * {@link /api/v1/apikey/:prefix}
 */
export async function headscaleServiceDeleteApiKey(prefix: HeadscaleServiceDeleteApiKeyPathParams['prefix'], config: Partial<RequestConfig> = {}) {
  const res = await client<HeadscaleServiceDeleteApiKeyMutationResponse, Error, unknown>({ method: 'DELETE', url: `/api/v1/apikey/${prefix}`, ...config })
  return res.data
}