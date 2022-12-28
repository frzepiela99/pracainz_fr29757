import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";



@InputType()
export class UpdatePublikacjaAutorInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    _id: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    autorStopienNaukowy: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    autorImie: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    autorNazwisko: string;

}