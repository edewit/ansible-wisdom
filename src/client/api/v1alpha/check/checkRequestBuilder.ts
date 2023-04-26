import {V1alphaCheckPermissionRequest, V1alphaCheckPermissionResponse} from '../../models/';
import {createV1alphaCheckPermissionResponseFromDiscriminatorValue} from '../../models/createV1alphaCheckPermissionResponseFromDiscriminatorValue';
import {CheckRequestBuilderPostRequestConfiguration} from './checkRequestBuilderPostRequestConfiguration';
import {createV1alphaCheckPermissionResponse401ErrorFromDiscriminatorValue} from './createV1alphaCheckPermissionResponse401ErrorFromDiscriminatorValue';
import {createV1alphaCheckPermissionResponse403ErrorFromDiscriminatorValue} from './createV1alphaCheckPermissionResponse403ErrorFromDiscriminatorValue';
import {createV1alphaCheckPermissionResponse500ErrorFromDiscriminatorValue} from './createV1alphaCheckPermissionResponse500ErrorFromDiscriminatorValue';
import {V1alphaCheckPermissionResponse401Error, V1alphaCheckPermissionResponse403Error, V1alphaCheckPermissionResponse500Error} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v1alpha/check
 */
export class CheckRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CheckRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v1alpha/check");
    };
    /**
     * CheckPermission endpoint is used by the clients to determine if the given "subject" has the given permission "Operation" on a given "Resource"
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of V1alphaCheckPermissionResponse
     */
    public post(body: V1alphaCheckPermissionRequest | undefined, requestConfiguration?: CheckRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<V1alphaCheckPermissionResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "401": createV1alphaCheckPermissionResponse401ErrorFromDiscriminatorValue,
            "403": createV1alphaCheckPermissionResponse403ErrorFromDiscriminatorValue,
            "500": createV1alphaCheckPermissionResponse500ErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<V1alphaCheckPermissionResponse>(requestInfo, createV1alphaCheckPermissionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * CheckPermission endpoint is used by the clients to determine if the given "subject" has the given permission "Operation" on a given "Resource"
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: V1alphaCheckPermissionRequest | undefined, requestConfiguration?: CheckRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
