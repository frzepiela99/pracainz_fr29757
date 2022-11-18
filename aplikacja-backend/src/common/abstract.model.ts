import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AbstractModel {
  @Field()
  readonly _id: string;

  @Field()
  readonly imie: string;

  @Field()
  readonly nazwisko: string;
}