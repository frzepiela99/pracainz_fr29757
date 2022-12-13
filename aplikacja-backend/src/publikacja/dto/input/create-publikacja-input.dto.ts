import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePublikacjaInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  tytul: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  streszczenie: string;

}


