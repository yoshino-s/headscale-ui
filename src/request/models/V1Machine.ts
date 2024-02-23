import type { V1User } from "./V1User";
import type { V1PreAuthKey } from "./V1PreAuthKey";
import type { V1RegisterMethod } from "./V1RegisterMethod";

export type V1Machine = {
    /**
     * @type string | undefined uint64
    */
    id?: string;
    /**
     * @type string | undefined
    */
    machineKey?: string;
    /**
     * @type string | undefined
    */
    nodeKey?: string;
    /**
     * @type string | undefined
    */
    discoKey?: string;
    /**
     * @type array | undefined
    */
    ipAddresses?: string[];
    /**
     * @type string | undefined
    */
    name?: string;
    user?: V1User;
    /**
     * @type string | undefined date-time
    */
    lastSeen?: string;
    /**
     * @type string | undefined date-time
    */
    lastSuccessfulUpdate?: string;
    /**
     * @type string | undefined date-time
    */
    expiry?: string;
    preAuthKey?: V1PreAuthKey;
    /**
     * @type string | undefined date-time
    */
    createdAt?: string;
    registerMethod?: V1RegisterMethod;
    /**
     * @type array | undefined
    */
    forcedTags?: string[];
    /**
     * @type array | undefined
    */
    invalidTags?: string[];
    /**
     * @type array | undefined
    */
    validTags?: string[];
    /**
     * @type string | undefined
    */
    givenName?: string;
    /**
     * @type boolean | undefined
    */
    online?: boolean;
};