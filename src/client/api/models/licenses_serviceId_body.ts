import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * ModifySeatsRequest assuming we get the userId etc from the requester in the authorization header to validate if an "admin" can actually add licenses.
 */
export class Licenses_serviceId_body implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** User IDs to assign to the license. */
    private _assign?: string[] | undefined;
    /** User IDs to remove from the license. */
    private _unassign?: string[] | undefined;
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
     * Gets the assign property value. User IDs to assign to the license.
     * @returns a string
     */
    public get assign() {
        return this._assign;
    };
    /**
     * Sets the assign property value. User IDs to assign to the license.
     * @param value Value to set for the assign property.
     */
    public set assign(value: string[] | undefined) {
        this._assign = value;
    };
    /**
     * Instantiates a new Licenses_serviceId_body and sets the default values.
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
            "assign": n => { this.assign = n.getCollectionOfPrimitiveValues<string>(); },
            "unassign": n => { this.unassign = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("assign", this.assign);
        writer.writeCollectionOfPrimitiveValues<string>("unassign", this.unassign);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unassign property value. User IDs to remove from the license.
     * @returns a string
     */
    public get unassign() {
        return this._unassign;
    };
    /**
     * Sets the unassign property value. User IDs to remove from the license.
     * @param value Value to set for the unassign property.
     */
    public set unassign(value: string[] | undefined) {
        this._unassign = value;
    };
}
