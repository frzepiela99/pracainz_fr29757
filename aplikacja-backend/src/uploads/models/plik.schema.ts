import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";


@Schema({ versionKey: false})
export class PlikDocument extends AbstractDocument {
    @Prop()
    nazwaPliku: string;

    @Prop()
    unikalnaNazwaPliku: string;
    
    @Prop()
    publikacjaId:string;
}

export const PlikSchema = SchemaFactory.createForClass(PlikDocument);