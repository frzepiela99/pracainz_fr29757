import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MaxLength} from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsString()
  @MaxLength(20)
  readonly imie: string;

  @Field()
  @IsString()
  @MaxLength(50)
  readonly nazwisko: string;

  @Field()
  @IsEmail()
  readonly email: string;

  @Field()
  @IsNotEmpty()

  readonly password: string;
}