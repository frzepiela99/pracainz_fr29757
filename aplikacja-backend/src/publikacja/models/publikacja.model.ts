import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { AbstractModel } from 'src/common/abstract.model';

export const PublikacjaSchema = new mongoose.Schema({
    tytul: { type: String, required: true },
    streszczenie: { type: String, required: true },
    userId: {type: String, required: true}
});

/*export interface Publikacja extends mongoose.Document {
         id: string;
         tytul: string;
         streszczenie: string;
}
*/

@ObjectType()
export class Publikacja extends AbstractModel {
    @Field()
    readonly tytul: string;

    @Field()
    readonly streszczenie: string;

    @Field()
    readonly userId: string;


}
//export default mongoose.model("Publikacja", PublikacjaSchema)