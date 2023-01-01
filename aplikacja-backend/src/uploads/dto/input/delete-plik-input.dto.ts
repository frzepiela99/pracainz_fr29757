import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeletePlikInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  _id: string;

}


