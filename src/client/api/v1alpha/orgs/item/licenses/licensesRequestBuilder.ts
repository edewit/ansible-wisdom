import {BaseRequestBuilder, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v1alpha/orgs/{orgId}/licenses
 */
export class LicensesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LicensesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v1alpha/orgs/{orgId}/licenses");
    };
}
