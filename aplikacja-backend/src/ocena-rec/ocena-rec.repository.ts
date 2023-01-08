import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { OcenaRecenzenta } from "./models/ocena-rec.model";
import { OcenaRecenzentDocument } from "./models/ocena-rec.schema";


@Injectable()
export class OcenaRecenzentRepository extends AbstractRepository<OcenaRecenzentDocument> {



    protected readonly logger = new Logger(OcenaRecenzentRepository.name);

    constructor(
        @InjectModel(OcenaRecenzenta.name) ocenaRecenzentaModel: Model<OcenaRecenzentDocument>
        
    ) {
        super(ocenaRecenzentaModel);
    }
}