import {V1alphaModifySeatsResponse500Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaModifySeatsResponse500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaModifySeatsResponse500Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaModifySeatsResponse500Error();
}
