import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.model';

@ObjectType()
export class User extends AbstractModel {

  @Field()
  readonly email: string;
  @Field()
  readonly imie: string;

  @Field()
  readonly nazwisko: string;
}