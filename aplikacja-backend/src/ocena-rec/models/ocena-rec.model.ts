import { Field, ObjectType } from '@nestjs/graphql';
import { string } from 'joi';
import * as mongoose from 'mongoose';
import { AbstractModel } from 'src/common/abstract.model';

// export const PublikacjaSchema = new mongoose.Schema({
//     tytul: { type: String, required: true },
//     streszczenie: { type: String, required: true },
//     autorStopienNaukowy: { type: String, required: true},
//     autorImie: { type: String, required: true},
//     autorNazwisko: { type: String, required: true},
//     plik: {type: String, required: false},
//     userId: {type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "User" },

// });

/*export interface Publikacja extends mongoose.Document {
         id: string;
         tytul: string;
         streszczenie: string;
}
*/

@ObjectType()
export class OcenaRecenzenta extends AbstractModel {
    @Field()
    readonly zgodnoscTemat: string;

    @Field()
    readonly skalaZgodnoscTemat: string;

    @Field()
    readonly skalaUklad: string;

    @Field()
    readonly merytorycznaOcena: string;

    @Field()
    readonly skalaMerytorycznaOcena: string;

    @Field()
    readonly uwagi: string;

    @Field()
    readonly charakterystykaZrodel: string;

    @Field()
    readonly formalnaStrona: string;

    @Field()
    readonly skalaFormalnaStrona: string;

    @Field()
    readonly sposobWykorzystania: string;

    @Field()
    readonly skalaOcena: string;

    @Field()
    readonly publikacjaId: string;

    @Field()
    readonly recenzentId: string;

}
//export default mongoose.model("Publikacja", PublikacjaSchema)