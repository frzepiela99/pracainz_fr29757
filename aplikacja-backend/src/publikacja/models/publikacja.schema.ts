import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";


@Schema({ versionKey: false})
export class PublikacjaDocument extends AbstractDocument {
    @Prop()
    tytul: string;

    @Prop()
    streszczenie: string;

    @Prop()
    userId:string;
}

export const PublikacjaSchema = SchemaFactory.createForClass(PublikacjaDocument);