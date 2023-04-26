import {createV1alphaGetSeatsUserRepresentationFromDiscriminatorValue} from './createV1alphaGetSeatsUserRepresentationFromDiscriminatorValue';
import {V1alphaGetSeatsUserRepresentation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class V1alphaGetSeatsResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Just user IDs, unless "includeUsers" = true. */
    private _users?: V1alphaGetSeatsUserRepresentation[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new V1alphaGetSeatsResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "users": n => { this.users = n.getCollectionOfObjectValues<V1alphaGetSeatsUserRepresentation>(createV1alphaGetSeatsUserRepresentationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<V1alphaGetSeatsUserRepresentation>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the users property value. Just user IDs, unless "includeUsers" = true.
     * @returns a v1alphaGetSeatsUserRepresentation
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. Just user IDs, unless "includeUsers" = true.
     * @param value Value to set for the users property.
     */
    public set users(value: V1alphaGetSeatsUserRepresentation[] | undefined) {
        this._users = value;
    };
}
