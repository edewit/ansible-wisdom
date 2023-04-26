import {Licenses_serviceId_body} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenses_serviceId_bodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Licenses_serviceId_body {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Licenses_serviceId_body();
}
