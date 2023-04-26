import {V1alphaModifySeatsResponse403Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaModifySeatsResponse403ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaModifySeatsResponse403Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaModifySeatsResponse403Error();
}
