import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";


@Schema({ versionKey: false})
export class OcenaRecenzentDocument extends AbstractDocument {
    @Prop()
    zgodnoscTemat: string;

    @Prop()
    skalaZgodnoscTemat: string;
    
    @Prop()
    skalaUklad: string;

    @Prop()
    merytorycznaOcena: string;

    @Prop()
    skalaMerytorycznaOcena: string;

    @Prop()
    uwagi: string;

    @Prop()
    charakterystykaZrodel: string;

    @Prop()
    formalnaStrona: string;

    @Prop()
    skalaFormalnaStrona: string;

    @Prop()
    sposobWykorzystania: string;

    @Prop()
    skalaOcena: string;
    
    @Prop()
    publikacjaId:string;

    @Prop()
    recenzentId: string;
}

export const OcenaRecenzentSchema = SchemaFactory.createForClass(OcenaRecenzentDocument);