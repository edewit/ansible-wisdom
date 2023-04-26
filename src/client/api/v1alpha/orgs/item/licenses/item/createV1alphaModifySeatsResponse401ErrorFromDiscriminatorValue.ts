import {V1alphaModifySeatsResponse401Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaModifySeatsResponse401ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaModifySeatsResponse401Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaModifySeatsResponse401Error();
}
