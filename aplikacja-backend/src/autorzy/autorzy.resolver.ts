import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateAutorzyInput } from 'src/autorzy/dto/input/create-autorzy-input.dto';
import { User } from 'src/users/models/user.model';
import { AutorzyService } from './autorzy.service';
import { Autorzy } from './models/autorzy.model';

@Resolver(() => Autorzy)
export class AutorzyResolver {
    constructor(private readonly autorzyService: AutorzyService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(()=> Autorzy)
    async createAutorzy(
        @Args('createAutorzyData') createAutorzyData: CreateAutorzyInput,
        @CurrentUser() user: User
    ) {
        return this.autorzyService.createAutorzy(createAutorzyData, user._id);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Autorzy], { name: 'autorzy' })
    async getAutorzy(@CurrentUser() user: User) {
        return this.autorzyService.getAutorzy(user._id)
    }
}
