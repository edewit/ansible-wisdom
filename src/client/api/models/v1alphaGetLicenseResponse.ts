import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class V1alphaGetLicenseResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Current number of available seats which can be assigned. */
    private _seatsAvailable?: number | undefined;
    /** Total number of seats assignable. */
    private _seatsTotal?: number | undefined;
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
     * Instantiates a new V1alphaGetLicenseResponse and sets the default values.
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
            "seatsAvailable": n => { this.seatsAvailable = n.getNumberValue(); },
            "seatsTotal": n => { this.seatsTotal = n.getNumberValue(); },
        };
    };
    /**
     * Gets the seatsAvailable property value. Current number of available seats which can be assigned.
     * @returns a integer
     */
    public get seatsAvailable() {
        return this._seatsAvailable;
    };
    /**
     * Sets the seatsAvailable property value. Current number of available seats which can be assigned.
     * @param value Value to set for the seatsAvailable property.
     */
    public set seatsAvailable(value: number | undefined) {
        this._seatsAvailable = value;
    };
    /**
     * Gets the seatsTotal property value. Total number of seats assignable.
     * @returns a integer
     */
    public get seatsTotal() {
        return this._seatsTotal;
    };
    /**
     * Sets the seatsTotal property value. Total number of seats assignable.
     * @param value Value to set for the seatsTotal property.
     */
    public set seatsTotal(value: number | undefined) {
        this._seatsTotal = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("seatsAvailable", this.seatsAvailable);
        writer.writeNumberValue("seatsTotal", this.seatsTotal);
        writer.writeAdditionalData(this.additionalData);
    };
}
