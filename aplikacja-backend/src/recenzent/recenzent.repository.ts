import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Recenzent } from "./models/recenzent.model";
import { RecenzentDocument } from "./models/recenzent.schema";


@Injectable()
export class RecenzentRepository extends AbstractRepository<RecenzentDocument> {



    protected readonly logger = new Logger(RecenzentRepository.name);

    constructor(
        @InjectModel(Recenzent.name) recenzentModel: Model<RecenzentDocument>
        
    ) {
        super(recenzentModel);
    }
}