import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";


@ArgsType()
export class GetPublikacjaaArgs {
    @Field()
    @IsNotEmpty()
    @IsString()
    _id: string;
}