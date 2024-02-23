import type { RpcStatus } from "./RpcStatus";
import type { V1ListPreAuthKeysResponse } from "./V1ListPreAuthKeysResponse";

export type HeadscaleServiceListPreAuthKeysQueryParams = {
    /**
     * @type string | undefined
    */
    user?: string;
} | undefined;

 /**
 * @description An unexpected error response.
*/
export type HeadscaleServiceListPreAuthKeysError = RpcStatus;

 /**
 * @description A successful response.
*/
export type HeadscaleServiceListPreAuthKeysQueryResponse = V1ListPreAuthKeysResponse;
export type HeadscaleServiceListPreAuthKeysQuery = {
    Response: HeadscaleServiceListPreAuthKeysQueryResponse;
    QueryParams: HeadscaleServiceListPreAuthKeysQueryParams;
    Errors: HeadscaleServiceListPreAuthKeysError;
};