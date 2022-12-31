import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Plik } from "./models/plik.model";
import { PlikDocument } from "./models/plik.schema";


@Injectable()
export class PlikRepository extends AbstractRepository<PlikDocument> {



    protected readonly logger = new Logger(PlikRepository.name);

    constructor(
        @InjectModel(Plik.name) plikModel: Model<PlikDocument>
        
    ) {
        super(plikModel);
    }
}