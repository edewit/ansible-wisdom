import {V1alphaRequestBuilder} from './v1alpha/v1alphaRequestBuilder';
import {BaseRequestBuilder, enableBackingStoreForSerializationWriterFactory, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class Authz extends BaseRequestBuilder {
    /** The v1alpha property */
    public get v1alpha(): V1alphaRequestBuilder {
        return new V1alphaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new Authz and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        super({}, requestAdapter, "{+baseurl}");
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        // if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        //     requestAdapter.baseUrl = "https://ciam-authz-hw-ciam-authz--runtime-ext.apps.ext.spoke.preprod.us-east-1.aws.paas.redhat.com";
        // }
        this.pathParameters["baseurl"] = requestAdapter.baseUrl;
    };
}
