import {V1alphaCheckPermissionResponse403Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaCheckPermissionResponse403ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaCheckPermissionResponse403Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaCheckPermissionResponse403Error();
}
