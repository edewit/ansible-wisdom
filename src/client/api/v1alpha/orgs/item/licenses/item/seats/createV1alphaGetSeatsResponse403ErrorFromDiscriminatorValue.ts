import {V1alphaGetSeatsResponse403Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetSeatsResponse403ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetSeatsResponse403Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetSeatsResponse403Error();
}
