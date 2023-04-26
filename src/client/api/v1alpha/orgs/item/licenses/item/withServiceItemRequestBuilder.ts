import {Licenses_serviceId_body, V1alphaGetLicenseResponse, V1alphaModifySeatsResponse} from '../../../../../models/';
import {createV1alphaGetLicenseResponseFromDiscriminatorValue} from '../../../../../models/createV1alphaGetLicenseResponseFromDiscriminatorValue';
import {createV1alphaModifySeatsResponseFromDiscriminatorValue} from '../../../../../models/createV1alphaModifySeatsResponseFromDiscriminatorValue';
import {createV1alphaGetLicenseResponse401ErrorFromDiscriminatorValue} from './createV1alphaGetLicenseResponse401ErrorFromDiscriminatorValue';
import {createV1alphaGetLicenseResponse403ErrorFromDiscriminatorValue} from './createV1alphaGetLicenseResponse403ErrorFromDiscriminatorValue';
import {createV1alphaGetLicenseResponse500ErrorFromDiscriminatorValue} from './createV1alphaGetLicenseResponse500ErrorFromDiscriminatorValue';
import {createV1alphaModifySeatsResponse401ErrorFromDiscriminatorValue} from './createV1alphaModifySeatsResponse401ErrorFromDiscriminatorValue';
import {createV1alphaModifySeatsResponse403ErrorFromDiscriminatorValue} from './createV1alphaModifySeatsResponse403ErrorFromDiscriminatorValue';
import {createV1alphaModifySeatsResponse500ErrorFromDiscriminatorValue} from './createV1alphaModifySeatsResponse500ErrorFromDiscriminatorValue';
import {V1alphaGetLicenseResponse401Error, V1alphaGetLicenseResponse403Error, V1alphaGetLicenseResponse500Error, V1alphaModifySeatsResponse401Error, V1alphaModifySeatsResponse403Error, V1alphaModifySeatsResponse500Error} from './index';
import {SeatsRequestBuilder} from './seats/seatsRequestBuilder';
import {WithServiceItemRequestBuilderGetRequestConfiguration} from './withServiceItemRequestBuilderGetRequestConfiguration';
import {WithServiceItemRequestBuilderPostRequestConfiguration} from './withServiceItemRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v1alpha/orgs/{orgId}/licenses/{serviceId}
 */
export class WithServiceItemRequestBuilder extends BaseRequestBuilder {
    /** The seats property */
    public get seats(): SeatsRequestBuilder {
        return new SeatsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WithServiceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v1alpha/orgs/{orgId}/licenses/{serviceId}");
    };
    /**
     * Returns information about the license,  including the number of entitled seats (maximum assignable) and the current number of available seats.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of V1alphaGetLicenseResponse
     */
    public get(requestConfiguration?: WithServiceItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<V1alphaGetLicenseResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "401": createV1alphaGetLicenseResponse401ErrorFromDiscriminatorValue,
            "403": createV1alphaGetLicenseResponse403ErrorFromDiscriminatorValue,
            "500": createV1alphaGetLicenseResponse500ErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<V1alphaGetLicenseResponse>(requestInfo, createV1alphaGetLicenseResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Assign or unassign users to or from the license.  Users assigned may access the service identified by serviceId as contracted with an organization (identified by orgId). Assigned users consume a limited number of seats in a license.
     * @param body ModifySeatsRequest assuming we get the userId etc from the requester in the authorization header to validate if an "admin" can actually add licenses.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of V1alphaModifySeatsResponse
     */
    public post(body: Licenses_serviceId_body | undefined, requestConfiguration?: WithServiceItemRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<V1alphaModifySeatsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "401": createV1alphaModifySeatsResponse401ErrorFromDiscriminatorValue,
            "403": createV1alphaModifySeatsResponse403ErrorFromDiscriminatorValue,
            "500": createV1alphaModifySeatsResponse500ErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<V1alphaModifySeatsResponse>(requestInfo, createV1alphaModifySeatsResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns information about the license,  including the number of entitled seats (maximum assignable) and the current number of available seats.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithServiceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Assign or unassign users to or from the license.  Users assigned may access the service identified by serviceId as contracted with an organization (identified by orgId). Assigned users consume a limited number of seats in a license.
     * @param body ModifySeatsRequest assuming we get the userId etc from the requester in the authorization header to validate if an "admin" can actually add licenses.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Licenses_serviceId_body | undefined, requestConfiguration?: WithServiceItemRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
