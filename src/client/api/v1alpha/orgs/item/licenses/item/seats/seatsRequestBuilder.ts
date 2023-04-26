import {V1alphaGetSeatsResponse} from '../../../../../../models/';
import {createV1alphaGetSeatsResponseFromDiscriminatorValue} from '../../../../../../models/createV1alphaGetSeatsResponseFromDiscriminatorValue';
import {createV1alphaGetSeatsResponse401ErrorFromDiscriminatorValue} from './createV1alphaGetSeatsResponse401ErrorFromDiscriminatorValue';
import {createV1alphaGetSeatsResponse403ErrorFromDiscriminatorValue} from './createV1alphaGetSeatsResponse403ErrorFromDiscriminatorValue';
import {createV1alphaGetSeatsResponse500ErrorFromDiscriminatorValue} from './createV1alphaGetSeatsResponse500ErrorFromDiscriminatorValue';
import {V1alphaGetSeatsResponse401Error, V1alphaGetSeatsResponse403Error, V1alphaGetSeatsResponse500Error} from './index';
import {SeatsRequestBuilderGetRequestConfiguration} from './seatsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v1alpha/orgs/{orgId}/licenses/{serviceId}/seats
 */
export class SeatsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SeatsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v1alpha/orgs/{orgId}/licenses/{serviceId}/seats{?includeUsers*,filter*}");
    };
    /**
     * Get details of users who are assigned to the license or available to be assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of V1alphaGetSeatsResponse
     */
    public get(requestConfiguration?: SeatsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<V1alphaGetSeatsResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "401": createV1alphaGetSeatsResponse401ErrorFromDiscriminatorValue,
            "403": createV1alphaGetSeatsResponse403ErrorFromDiscriminatorValue,
            "500": createV1alphaGetSeatsResponse500ErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<V1alphaGetSeatsResponse>(requestInfo, createV1alphaGetSeatsResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get details of users who are assigned to the license or available to be assigned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SeatsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
