import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/auth/current-user.decorator";
import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { User } from "src/users/models/user.model";
import { GetPublikacjaaArgs } from "./dto/args/get-publikacjaa-args.dto";
import { CreatePublikacjaInput } from "./dto/input/create-publikacja-input.dto";
import { Publikacja } from "./models/publikacja.model";
import { PublikacjaService } from "./publikacja.service";

@Resolver(() => Publikacja)
export class PublikacjaResolver {
    constructor(private readonly publikacjaService: PublikacjaService) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Publikacja)
    async createPublikacja(
        @Args('createPublikacjaData') createPublikacjaData: CreatePublikacjaInput,
        @CurrentUser() user: User,
    ) {
        return this.publikacjaService.createPublikacja(createPublikacjaData, user._id);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Publikacja], { name: 'publikacja' })
    async getPublikacja(@CurrentUser() user: User) {
        return this.publikacjaService.getPublikacja(user._id);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Publikacja, { name: 'publikacjaa' })
    async getPublikacjaa(
        @Args() getPublikacjaaArgs: GetPublikacjaaArgs,
        @CurrentUser() user: User,
    ) {
        return this.publikacjaService.getPublikacjaa(getPublikacjaaArgs, user._id);
    }
}