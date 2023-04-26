import {V1alphaGetLicenseResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetLicenseResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetLicenseResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetLicenseResponse();
}
