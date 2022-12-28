import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreateAutorzyInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    imie: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    nazwisko: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    stopien_naukowy: string;
}