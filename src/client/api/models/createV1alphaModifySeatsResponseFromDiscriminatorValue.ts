import {V1alphaModifySeatsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaModifySeatsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaModifySeatsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaModifySeatsResponse();
}
