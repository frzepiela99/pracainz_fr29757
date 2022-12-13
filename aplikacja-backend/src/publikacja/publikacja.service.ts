import { Injectable, NotFoundException } from '@nestjs/common';
//import { InjectModel } from '@nestjs/mongoose';
//import { Model } from 'mongoose';

import { Publikacja } from './models/publikacja.model';
import { PublikacjaRepository } from './publikacja.repository';
import { PublikacjaDocument } from './models/publikacja.schema';
import { CreatePublikacjaInput } from './dto/input/create-publikacja-input.dto';
import { GetPublikacjaaArgs } from './dto/args/get-publikacjaa-args.dto';

@Injectable()
export class PublikacjaService {
    constructor(private readonly publikacjaRepository: PublikacjaRepository) {}

    async createPublikacja(
        createPublikacjaData: CreatePublikacjaInput,

        userId: string,
    ) {
        const PublikacjaDocument = await this.publikacjaRepository.create({
            ...createPublikacjaData,
           // tytul,
           // streszczenie,
            userId,
        });

        return this.toModel(PublikacjaDocument);
    }

    async getPublikacja(userId: string) {
        const PublikacjaDocument = await this.publikacjaRepository.find({ userId });
        return PublikacjaDocument.map((publikacja) => this.toModel(publikacja));
    }

    async getPublikacjaa(getPublikacjaaArgs: GetPublikacjaaArgs, userId: string) {
        const publikacjaaDocument = await this.publikacjaRepository.findOne({
            ...getPublikacjaaArgs,
            userId,
        });
        return this.toModel(publikacjaaDocument);
    }

    private toModel(PublikacjaDocument: PublikacjaDocument) {
        return {
            _id: PublikacjaDocument._id.toHexString(),
            ...PublikacjaDocument,
        };
    }
}





    /* constructor(
        @InjectModel('Publikacja') private readonly publikacjaModel: Model<Publikacja>,
    ) {}

    async insertPublikacja(tytul: string, streszczenie: string) {
        const newPublikacja = new this.publikacjaModel({
            tytul,
            streszczenie,
        });

        const result = await newPublikacja.save();
        return result.id as string;
    }

    async getPublikacja() {
        const publikacja = await this.publikacjaModel.find().exec();
        return publikacja.map(pub => ({
            id: pub.id,
            tytul: pub.tytul,
            streszczenie: pub.streszczenie,
        }));

    }

    async getPojedynczaPublikacja(publikacjaId: string) {
        const publikacja = await this.findPublikacja(publikacjaId);
        return {
            id: publikacja.id,
            tytul: publikacja.tytul,
            streszczenie: publikacja.streszczenie,
        };
    }

    async updatePublikacja(
        publikacjaId: string,
        tytul: string,
        streszczenie: string,
    ) {
        const updatedPublikacja = await this.findPublikacja(publikacjaId);
        if (tytul) {
          updatedPublikacja.tytul = tytul;
        }
        if (streszczenie) {
          updatedPublikacja.streszczenie = streszczenie;
        }
        updatedPublikacja.save();
    }

    async deletePublikacja(pubId: string) {
        const result = await this.publikacjaModel.deleteOne({_id: pubId}).exec();
        console.log(result);
    }

    private async findPublikacja(id: string): Promise<Publikacja> {
        let publikacja;
        try {
            publikacja = await this.publikacjaModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product.');
        }
        if (!publikacja) {
          throw new NotFoundException('Could not find product.');
        }
        return publikacja;
      }

}
*/