import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/auth/current-user.decorator";
import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { User } from "src/users/models/user.model";
import { DeletePlikInput } from "./dto/input/delete-plik-input.dto";
// import { User } from "src/users/models/user.model";
// import { GetPublikacjaaArgs } from "./dto/args/get-publikacjaa-args.dto";
// import { CreatePublikacjaInput } from "./dto/input/create-publikacja-input.dto";
// import { DeletePublikacjaInput } from "./dto/input/delete-publikacja-input.dto";
// import { UpdatePublikacjaAutorInput } from "./dto/input/update-publikacja_autor-input.dto";
// import { UpdatePublikacjaStreszczenieInput } from "./dto/input/update-publikacja_streszczenie-input.dto";
// import { UpdatePublikacjaTytulInput } from "./dto/input/update-publikacja_tytul-input.dto";
import { Plik } from "./models/plik.model";
import { PlikService } from "./plik.service";

@Resolver(() => Plik)
export class PlikResolver {
    constructor(private readonly plikService: PlikService) {}

}