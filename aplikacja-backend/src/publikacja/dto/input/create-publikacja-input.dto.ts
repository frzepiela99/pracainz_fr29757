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


