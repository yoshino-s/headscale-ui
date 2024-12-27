export type V1ApiKey = {
  /**
   * @type string | undefined, uint64
   */
  id?: string
  /**
   * @type string | undefined
   */
  prefix?: string
  /**
   * @type string | undefined, date-time
   */
  expiration?: Date
  /**
   * @type string | undefined, date-time
   */
  createdAt?: Date
  /**
   * @type string | undefined, date-time
   */
  lastSeen?: Date
}