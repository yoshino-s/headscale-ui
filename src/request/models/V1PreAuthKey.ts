export type V1PreAuthKey = {
    /**
     * @type string | undefined
    */
    user?: string;
    /**
     * @type string | undefined
    */
    id?: string;
    /**
     * @type string | undefined
    */
    key?: string;
    /**
     * @type boolean | undefined
    */
    reusable?: boolean;
    /**
     * @type boolean | undefined
    */
    ephemeral?: boolean;
    /**
     * @type boolean | undefined
    */
    used?: boolean;
    /**
     * @type string | undefined date-time
    */
    expiration?: string;
    /**
     * @type string | undefined date-time
    */
    createdAt?: string;
    /**
     * @type array | undefined
    */
    aclTags?: string[];
};