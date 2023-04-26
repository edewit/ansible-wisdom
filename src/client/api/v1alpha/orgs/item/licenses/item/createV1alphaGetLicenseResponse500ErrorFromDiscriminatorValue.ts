import {V1alphaGetLicenseResponse500Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetLicenseResponse500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetLicenseResponse500Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetLicenseResponse500Error();
}
