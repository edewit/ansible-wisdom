import {V1alphaCheckPermissionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createV1alphaCheckPermissionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : V1alphaCheckPermissionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new V1alphaCheckPermissionResponse();
}
