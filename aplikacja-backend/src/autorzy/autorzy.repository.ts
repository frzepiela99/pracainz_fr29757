import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Autorzy } from "./models/autorzy.model";
import { AutorzyDocument } from "./models/autorzy.schema";


@Injectable()
export class AutorzyRepository extends AbstractRepository<AutorzyDocument> {
    protected readonly logger = new Logger(AutorzyRepository.name);

    constructor(
        @InjectModel(Autorzy.name) autorzyModel: Model<AutorzyDocument>,
    ){
        super(autorzyModel);
    }
}