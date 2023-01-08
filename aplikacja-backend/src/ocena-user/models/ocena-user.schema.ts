import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";


@Schema({ versionKey: false})
export class OcenaUzytkownikDocument extends AbstractDocument {
    @Prop()
    skalaOcena: string;

    @Prop()
    komentarz: string;
    
    @Prop()
    publikacjaId:string;

    @Prop()
    userId: string;
}

export const OcenaUzytkownikSchema = SchemaFactory.createForClass(OcenaUzytkownikDocument);