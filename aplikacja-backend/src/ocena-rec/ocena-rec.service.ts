import { Injectable } from '@nestjs/common';
import { OcenaRecenzentDocument } from './models/ocena-rec.schema';
import { OcenaRecenzentRepository } from './ocena-rec.repository';

@Injectable()
export class OcenaRecService {
    constructor(private readonly ocenaRecenzentRepository: OcenaRecenzentRepository) {

    }

    async createOcenaRecenzenta(
    
        ocena: {
        zgodnoscTemat: string,
        skalaZgodnoscTemat: string,
        skalaUklad: string,
        merytorycznaOcena: string,
        skalaMerytorycznaOcena: string,
        uwagi: string,
        charakterystykaZrodel: string,
        formalnaStrona: string,
        skalaFormalnaStrona: string,
        sposobWykorzystania: string,
        skalaOcena: string,
        publikacjaId: string,
        recenzentId: string
    }
    )
    {
        const OcenaRecenzentDocument = await this.ocenaRecenzentRepository.create(
            ocena
        );

        
        return this.toModel(OcenaRecenzentDocument);
        
    }

    async getOcenaRecenzent(publikacjaId: string, recenzentId: string) {
        const OcenaRecenzentDocument = await this.ocenaRecenzentRepository.findOne({ publikacjaId: publikacjaId, recenzentId: recenzentId });
        
        return this.toModel(OcenaRecenzentDocument);
    }

    private toModel(ocenaRecenzentDocument: OcenaRecenzentDocument) {
        return {
            _id: ocenaRecenzentDocument._id.toHexString(),
            ...ocenaRecenzentDocument,
        };
    } 
}
