import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { OcenaUzytownika } from "./models/ocena-user.model";
import { OcenaUzytkownikDocument } from "./models/ocena-user.schema";



@Injectable()
export class OcenaUzytkownikaRepository extends AbstractRepository<OcenaUzytkownikDocument> {



    protected readonly logger = new Logger(OcenaUzytkownikaRepository.name);

    constructor(
        @InjectModel(OcenaUzytownika.name) ocenaUzytkownikModel: Model<OcenaUzytkownikDocument>
        
    ) {
        super(ocenaUzytkownikModel);
    }
}