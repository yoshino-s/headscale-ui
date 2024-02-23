export type V1CreatePreAuthKeyRequest = {
    /**
     * @type string | undefined
    */
    user?: string;
    /**
     * @type boolean | undefined
    */
    reusable?: boolean;
    /**
     * @type boolean | undefined
    */
    ephemeral?: boolean;
    /**
     * @type string | undefined date-time
    */
    expiration?: string;
    /**
     * @type array | undefined
    */
    aclTags?: string[];
};