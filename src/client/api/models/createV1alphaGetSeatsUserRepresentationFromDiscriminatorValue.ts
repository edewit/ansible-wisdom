import {V1alphaGetSeatsUserRepresentation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetSeatsUserRepresentationFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetSeatsUserRepresentation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetSeatsUserRepresentation();
}
