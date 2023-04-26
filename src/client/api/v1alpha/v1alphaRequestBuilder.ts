import {CheckRequestBuilder} from './check/checkRequestBuilder';
import {WithOrgItemRequestBuilder} from './orgs/item/withOrgItemRequestBuilder';
import {OrgsRequestBuilder} from './orgs/orgsRequestBuilder';
import {BaseRequestBuilder, getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v1alpha
 */
export class V1alphaRequestBuilder extends BaseRequestBuilder {
    /** The check property */
    public get check(): CheckRequestBuilder {
        return new CheckRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The orgs property */
    public get orgs(): OrgsRequestBuilder {
        return new OrgsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new V1alphaRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v1alpha");
    };
    /**
     * Gets an item from the ApiSdk.v1alpha.orgs.item collection
     * @param id Unique identifier of the item
     * @returns a WithOrgItemRequestBuilder
     */
    public orgsById(id: string) : WithOrgItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orgId"] = id
        return new WithOrgItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
