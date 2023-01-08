import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from 'src/common/abstract.model';


@ObjectType()
export class Recenzent extends AbstractModel {
    @Field()
    readonly userId: string;

    @Field()
    readonly publikacjaId: string;

}
