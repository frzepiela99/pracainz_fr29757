import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/auth/current-user.decorator";
import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { User } from "src/users/models/user.model";
import { GetPublikacjaaArgs } from "./dto/args/get-publikacjaa-args.dto";
import { CreatePublikacjaInput } from "./dto/input/create-publikacja-input.dto";
import { DeletePublikacjaInput } from "./dto/input/delete-publikacja-input.dto";
import { UpdatePublikacjaAutorInput } from "./dto/input/update-publikacja_autor-input.dto";
import { UpdatePublikacjaStreszczenieInput } from "./dto/input/update-publikacja_streszczenie-input.dto";
import { UpdatePublikacjaTytulInput } from "./dto/input/update-publikacja_tytul-input.dto";
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
     @Mutation(() => Publikacja)
     async deletePublikacja(
         @Args('deletePublikacjaData') deletePublikacjaData: DeletePublikacjaInput,
         @CurrentUser() user: User,
     ) {
         return this.publikacjaService.deletePublikacja(deletePublikacjaData, deletePublikacjaData._id);
     }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Publikacja)
    async updatePublikacjaAutor(
        @Args('updatePublikacjaAutorData') updatePublikacjaAutorData: UpdatePublikacjaAutorInput,
        @CurrentUser() user: User
    ) {
        return this.publikacjaService.updatePublikacjaAutor(updatePublikacjaAutorData, user._id)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Publikacja)
    async updatePublikacjaTytul(
        @Args('updatePublikacjaTytulData') updatePublikacjaTytulData: UpdatePublikacjaTytulInput,
        @CurrentUser() user: User
    ) {
        return this.publikacjaService.updatePublikacjaTytul(updatePublikacjaTytulData, user._id)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Publikacja)
    async updatePublikacjaStreszczenie(
        @Args('updatePublikacjaStreszczenieData') updatePublikacjaStreszczenieData: UpdatePublikacjaStreszczenieInput,
        @CurrentUser() user: User
    ) {
        return this.publikacjaService.updatePublikacjaStreszczenie(updatePublikacjaStreszczenieData, user._id)
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