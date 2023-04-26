import {V1alphaGetSeatsResponse500Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetSeatsResponse500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetSeatsResponse500Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetSeatsResponse500Error();
}
