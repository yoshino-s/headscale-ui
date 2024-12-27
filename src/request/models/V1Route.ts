import type { V1Node } from './V1Node.ts'

export type V1Route = {
  /**
   * @type string | undefined, uint64
   */
  id?: string
  /**
   * @type object | undefined
   */
  node?: V1Node
  /**
   * @type string | undefined
   */
  prefix?: string
  /**
   * @type boolean | undefined
   */
  advertised?: boolean
  /**
   * @type boolean | undefined
   */
  enabled?: boolean
  /**
   * @type boolean | undefined
   */
  isPrimary?: boolean
  /**
   * @type string | undefined, date-time
   */
  createdAt?: Date
  /**
   * @type string | undefined, date-time
   */
  updatedAt?: Date
  /**
   * @type string | undefined, date-time
   */
  deletedAt?: Date
}