
/**
 * Get details of users who are assigned to the license or available to be assigned.
 */
export class SeatsRequestBuilderGetQueryParameters {
    /** filter, either assigned or assignable users returned. Default: assigned. */
    public filter?: string | undefined;
    /** true: include enriched user representation. false: do not include (only IDs). Default: true. */
    public includeUsers?: boolean | undefined;
}
