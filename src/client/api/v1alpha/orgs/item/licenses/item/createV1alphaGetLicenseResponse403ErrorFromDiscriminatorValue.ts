import {V1alphaGetLicenseResponse403Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetLicenseResponse403ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetLicenseResponse403Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetLicenseResponse403Error();
}
