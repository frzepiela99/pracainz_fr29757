import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';
import { AbstractModel } from "src/common/abstract.model";

export const AutorzySchema = new mongoose.Schema({
    imie: { type: String, required: true },
    nazwisko: { type: String, required: true },
    stopien_naukowy: { type: String, required: true },
    userId: {type: String, required: true}
});
@ObjectType()
export class Autorzy extends AbstractModel{
    @Field()
    readonly imie: string;

    @Field()
    readonly nazwisko: string;

    @Field()
    readonly stopien_naukowy: string;

    @Field()
    readonly userId: string;
}