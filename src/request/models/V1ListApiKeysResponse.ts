import type { V1ApiKey } from './V1ApiKey.ts'

export type V1ListApiKeysResponse = {
  /**
   * @type array | undefined
   */
  apiKeys?: V1ApiKey[]
}