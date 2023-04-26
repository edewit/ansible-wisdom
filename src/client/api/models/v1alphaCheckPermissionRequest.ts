import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class V1alphaCheckPermissionRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The operation property */
    private _operation?: string | undefined;
    /** The resourceid property */
    private _resourceid?: string | undefined;
    /** The resourcetype property */
    private _resourcetype?: string | undefined;
    /** The subject property */
    private _subject?: string | undefined;
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
     * Instantiates a new V1alphaCheckPermissionRequest and sets the default values.
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
            "operation": n => { this.operation = n.getStringValue(); },
            "resourceid": n => { this.resourceid = n.getStringValue(); },
            "resourcetype": n => { this.resourcetype = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the operation property value. The operation property
     * @returns a string
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. The operation property
     * @param value Value to set for the operation property.
     */
    public set operation(value: string | undefined) {
        this._operation = value;
    };
    /**
     * Gets the resourceid property value. The resourceid property
     * @returns a string
     */
    public get resourceid() {
        return this._resourceid;
    };
    /**
     * Sets the resourceid property value. The resourceid property
     * @param value Value to set for the resourceid property.
     */
    public set resourceid(value: string | undefined) {
        this._resourceid = value;
    };
    /**
     * Gets the resourcetype property value. The resourcetype property
     * @returns a string
     */
    public get resourcetype() {
        return this._resourcetype;
    };
    /**
     * Sets the resourcetype property value. The resourcetype property
     * @param value Value to set for the resourcetype property.
     */
    public set resourcetype(value: string | undefined) {
        this._resourcetype = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("operation", this.operation);
        writer.writeStringValue("resourceid", this.resourceid);
        writer.writeStringValue("resourcetype", this.resourcetype);
        writer.writeStringValue("subject", this.subject);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subject property value. The subject property
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject property
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
