import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { AbstractDocument } from "src/database/abstract.schema";

@Schema({ versionKey: false })
export class AutorzyDocument extends AbstractDocument {
    @Prop()
    imie: string;
    
    @Prop()
    nazwisko: string;

    @Prop()
    stopien_naukowy: string;

    @Prop()
    userId: string;

}

export const AutorzySchema = SchemaFactory.createForClass(AutorzyDocument);