import { Logger, NotFoundException } from "@nestjs/common";
import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { AbstractDocument } from "./abstract.schema";

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    constructor(protected readonly model: Model<TDocument>){}

    protected abstract readonly logger: Logger;

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {

        const createdDocument = new this.model({
            ...document,
            _id: new Types.ObjectId()
        });
        return (await createdDocument.save()).toJSON() as unknown as TDocument;
    }

    async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        const document = await this.model.findOne(filterQuery, {}, { lean: true });

        if (!document) {
            this.logger.warn('Document not found with filterQuery', filterQuery);
            throw new NotFoundException('Document not found')
        }

        return document;
    }

    async findOneAndUpdate(
        filterQuery: FilterQuery<TDocument>,
        update: UpdateQuery<TDocument>,
    ) {
        const document = await this.model.findOneAndUpdate(filterQuery, update, {
            lean: true,
            new: true,
        });

        if (!document) {
            this.logger.warn('Document not found with filterQuery: ', filterQuery);
            throw new NotFoundException('Document not found');
        }
        return document;
    }

    // async findByIdAndDelete(_id: string ): Promise<TDocument> {
    //     const document = await this.model.findByIdAndDelete(_id, {} );

    //     if (!document) {
    //         this.logger.warn('Document not found with filterQuery', _id);
    //         throw new NotFoundException('Document not found')
    //     }

    //     return document;
    // }
    
     async deleteMany(FilterQuery: FilterQuery<TDocument>): Promise<boolean> {
         const deleteResult = await this.model.deleteMany(FilterQuery);
        return deleteResult.deletedCount >= 1; }


    async find(filterQuery: FilterQuery<TDocument>) {
        return this.model.find(filterQuery, {}, { lean: true });
    }
}