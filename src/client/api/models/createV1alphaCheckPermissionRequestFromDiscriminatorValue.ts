import {V1alphaCheckPermissionRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaCheckPermissionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaCheckPermissionRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaCheckPermissionRequest();
}
