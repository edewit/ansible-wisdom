import {V1alphaCheckPermissionResponse500Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaCheckPermissionResponse500ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaCheckPermissionResponse500Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaCheckPermissionResponse500Error();
}
