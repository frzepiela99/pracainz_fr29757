import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";


@Schema({ versionKey: false})
export class RecenzentDocument extends AbstractDocument {
    @Prop()
    userId: string;
    
    @Prop()
    publikacjaId:string;
}

export const RecenzentSchema = SchemaFactory.createForClass(RecenzentDocument);