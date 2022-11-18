import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Publikacja } from './publikacja.model';

@Injectable()
export class PublikacjaService {
    constructor(
        @InjectModel('Publikacja') private readonly publikacjaModel: Model<Publikacja>,
    ) {}

    async insertPublikacja(tytul: string, streszczenie: string, akceptacja: boolean) {
        const newPublikacja = new this.publikacjaModel({
            tytul,
            streszczenie,
            akceptacja
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
            akceptacja: pub.akceptacja
        }));

    }

    async getPojedynczaPublikacja(publikacjaId: string) {
        const publikacja = await this.findPublikacja(publikacjaId);
        return {
            id: publikacja.id,
            tytul: publikacja.tytul,
            streszczenie: publikacja.streszczenie,
            akceptacja: publikacja.akceptacja,
        };
    }

    async updatePublikacja(
        publikacjaId: string,
        tytul: string,
        streszczenie: string,
        akceptacja: boolean,
    ) {
        const updatedPublikacja = await this.findPublikacja(publikacjaId);
        if (tytul) {
          updatedPublikacja.tytul = tytul;
        }
        if (streszczenie) {
          updatedPublikacja.streszczenie = streszczenie;
        }
        if (akceptacja) {
          updatedPublikacja.akceptacja = akceptacja;
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
