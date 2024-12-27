import type { ProtobufAny } from './ProtobufAny.ts'

export type RpcStatus = {
  /**
   * @type integer | undefined, int32
   */
  code?: number
  /**
   * @type string | undefined
   */
  message?: string
  /**
   * @type array | undefined
   */
  details?: ProtobufAny[]
}