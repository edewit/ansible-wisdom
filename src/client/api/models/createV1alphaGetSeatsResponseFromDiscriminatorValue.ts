import {V1alphaGetSeatsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetSeatsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetSeatsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetSeatsResponse();
}
