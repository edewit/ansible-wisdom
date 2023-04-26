import {V1alphaGetSeatsResponse401Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaGetSeatsResponse401ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaGetSeatsResponse401Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaGetSeatsResponse401Error();
}
