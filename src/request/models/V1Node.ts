import type { V1PreAuthKey } from './V1PreAuthKey.ts'
import type { V1RegisterMethod } from './V1RegisterMethod.ts'
import type { V1User } from './V1User.ts'

export type V1Node = {
  /**
   * @type string | undefined, uint64
   */
  id?: string
  /**
   * @type string | undefined
   */
  machineKey?: string
  /**
   * @type string | undefined
   */
  nodeKey?: string
  /**
   * @type string | undefined
   */
  discoKey?: string
  /**
   * @type array | undefined
   */
  ipAddresses?: string[]
  /**
   * @type string | undefined
   */
  name?: string
  /**
   * @type object | undefined
   */
  user?: V1User
  /**
   * @type string | undefined, date-time
   */
  lastSeen?: Date
  /**
   * @type string | undefined, date-time
   */
  expiry?: Date
  /**
   * @type object | undefined
   */
  preAuthKey?: V1PreAuthKey
  /**
   * @type string | undefined, date-time
   */
  createdAt?: Date
  /**
   * @type string | undefined
   */
  registerMethod?: V1RegisterMethod
  /**
   * @type array | undefined
   */
  forcedTags?: string[]
  /**
   * @type array | undefined
   */
  invalidTags?: string[]
  /**
   * @type array | undefined
   */
  validTags?: string[]
  /**
   * @type string | undefined
   */
  givenName?: string
  /**
   * @type boolean | undefined
   */
  online?: boolean
}