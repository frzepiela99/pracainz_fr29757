import { Injectable, NotFoundException, Post } from '@nestjs/common';
//import { InjectModel } from '@nestjs/mongoose';
//import { Model } from 'mongoose';

import { PlikRepository } from './plik.repository';
import { PlikDocument } from './models/plik.schema';
import { DeletePlikInput } from './dto/input/delete-plik-input.dto';

@Injectable()
export class PlikService {
    constructor(private readonly plikRepository: PlikRepository) { }

    async createPlik(
        publikacjaId: string,
        nazwaPliku: string,
        unikalnaNazwaPliku: string,
    ) {
        const PlikDocument = await this.plikRepository.create({
            nazwaPliku,
            unikalnaNazwaPliku,
            publikacjaId
        });

        return this.toModel(PlikDocument);
    }

    async deletePlik(_id: string): Promise<PlikDocument> {
        const PlikDocument = await this.plikRepository.findByIdAndDelete(
            _id
        );
        return this.toModel(PlikDocument);
    }

    async getPlik(publikacjaId: string) {
        const PlikDocument = await this.plikRepository.find({ publikacjaId });

        return PlikDocument.map((plik) => this.toModel(plik));
    }


    private toModel(plikDocument: PlikDocument) {
        return {
            _id: plikDocument._id.toHexString(),
            ...plikDocument,
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