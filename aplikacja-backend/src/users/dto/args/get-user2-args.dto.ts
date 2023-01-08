import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class GetUser2Args {
  @Field()
  @IsString()
  @IsNotEmpty()
  _id: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  imie: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  nazwisko: string;
}