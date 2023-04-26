import {V1alphaCheckPermissionResponse401Error} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaCheckPermissionResponse401ErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaCheckPermissionResponse401Error {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaCheckPermissionResponse401Error();
}
