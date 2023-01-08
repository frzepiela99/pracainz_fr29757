import { Injectable } from '@nestjs/common';
import { OcenaUzytkownikDocument } from './models/ocena-user.schema';
import { OcenaUzytkownikaRepository } from './ocena-user.repository';

@Injectable()
export class OcenaUzytkownikService {
    constructor(private readonly ocenaUzytkownikRepository: OcenaUzytkownikaRepository) {

    }

    async createOcenaUzytkownika(

        ocenaUz: {
            skalaOcena: string,
            komentarz: string,
            publikacjaId: string,
            userId: string
        }
    ) {
        const OcenaUzytkownikDocument = await this.ocenaUzytkownikRepository.create(
            ocenaUz
        );

        console.log(OcenaUzytkownikDocument);
        return this.toModel(OcenaUzytkownikDocument);

    }

    async getOcenaUzytkownika(publikacjaId: string, userId: string) {
        const OcenaUzytkownikDocument = await this.ocenaUzytkownikRepository.findOne({ publikacjaId: publikacjaId, userId: userId });

        return this.toModel(OcenaUzytkownikDocument);
    }

    private toModel(ocenaUzytkownikDocument: OcenaUzytkownikDocument) {
        return {
            _id: ocenaUzytkownikDocument._id.toHexString(),
            ...ocenaUzytkownikDocument,
        };
    }
}
