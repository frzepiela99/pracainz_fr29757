import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Publikacja } from "./models/publikacja.model";
import { PublikacjaDocument } from "./models/publikacja.schema";


@Injectable()
export class PublikacjaRepository extends AbstractRepository<PublikacjaDocument> {



    protected readonly logger = new Logger(PublikacjaRepository.name);

    constructor(
        @InjectModel(Publikacja.name) publikacjaModel: Model<PublikacjaDocument>

    ) {
        super(publikacjaModel);
    }
}