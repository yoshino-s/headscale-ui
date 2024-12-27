import type { V1PreAuthKey } from './V1PreAuthKey.ts'

export type V1ListPreAuthKeysResponse = {
  /**
   * @type array | undefined
   */
  preAuthKeys?: V1PreAuthKey[]
}