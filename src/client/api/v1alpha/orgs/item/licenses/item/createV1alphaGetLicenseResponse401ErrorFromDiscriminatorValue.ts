import {V1alphaGetLicenseResponse401Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetLicenseResponse401ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetLicenseResponse401Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetLicenseResponse401Error();
}
