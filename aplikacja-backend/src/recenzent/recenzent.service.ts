import { Injectable } from '@nestjs/common';
import { RecenzentDocument } from './models/recenzent.schema';
import { RecenzentRepository } from './recenzent.repository';

@Injectable()
export class RecenzentService {
    constructor(private readonly recenzentRepository: RecenzentRepository) { }

    async createRecenzent(
        userId: string,
        publikacjaId: string,
    ) {
        const RecenzentDocument = await this.recenzentRepository.create({
            publikacjaId,
            userId
        });

        console.log(RecenzentDocument);

        return this.toModel(RecenzentDocument);
    }

    async getPublikacjaRecenzent(pubId: string) {
        const recenzenci = await this.recenzentRepository.find({ publikacjaId: pubId });
        console.log(recenzenci);
        return recenzenci.map(recenzent => recenzent.userId).flat();
    }

    private toModel(recenzentDocument: RecenzentDocument) {
        return {
            _id: recenzentDocument._id.toHexString(),
            ...recenzentDocument,
        };
    }

}
