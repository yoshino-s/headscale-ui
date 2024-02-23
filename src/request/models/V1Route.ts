import type { V1Machine } from "./V1Machine";

export type V1Route = {
    /**
     * @type string | undefined uint64
    */
    id?: string;
    machine?: V1Machine;
    /**
     * @type string | undefined
    */
    prefix?: string;
    /**
     * @type boolean | undefined
    */
    advertised?: boolean;
    /**
     * @type boolean | undefined
    */
    enabled?: boolean;
    /**
     * @type boolean | undefined
    */
    isPrimary?: boolean;
    /**
     * @type string | undefined date-time
    */
    createdAt?: string;
    /**
     * @type string | undefined date-time
    */
    updatedAt?: string;
    /**
     * @type string | undefined date-time
    */
    deletedAt?: string;
};