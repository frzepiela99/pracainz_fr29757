import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { GetUser2Args } from './dto/args/get-user2-args.dto';
import { GetUsersArgs } from './dto/args/get-users-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(() => User)
    async createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.usersService.createUser(createUserData);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => User, { name: 'user'})
    async getUser(@Args() getUserArgs: GetUserArgs) {
        return this.usersService.getUser(getUserArgs)
    }

    // @UseGuards(GqlAuthGuard)
    // @Query(() => User, {})
    // async getUsers(@Args() getUsersArgs: GetUsersArgs) {
    //     return this.usersService.getUsers(getUsersArgs)
    // }

    @UseGuards(GqlAuthGuard)
    @Query(() => [User], { name: 'usersAll' })
    async getUsersAll(@CurrentUser() user: User) {
        return this.usersService.getUsersAll(user);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => User, { name: 'zalogowanyUser'})
    async getUserZalogowany(@CurrentUser() user: User) {
        return this.usersService.getUserZalogowany(user)
    }
}
