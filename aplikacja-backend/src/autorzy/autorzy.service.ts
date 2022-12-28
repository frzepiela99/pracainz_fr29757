import { Injectable } from '@nestjs/common';
import { CreateAutorzyInput } from 'src/autorzy/dto/input/create-autorzy-input.dto';
import { AutorzyRepository } from './autorzy.repository';
import { AutorzyDocument } from './models/autorzy.schema';

@Injectable()
export class AutorzyService {
    constructor(private readonly autorzyRepository: AutorzyRepository) {}

    async createAutorzy(
        createAutorzyData: CreateAutorzyInput,
        userId: string,
    ) {
        const AutorzyDocument = await this.autorzyRepository.create({
            ...createAutorzyData,
            userId,
        });
        return this.toModel(AutorzyDocument);
    }

    async getAutorzy(userId: string) {
        const AutorzyDocument = await this.autorzyRepository.find({userId});
        return AutorzyDocument.map((autorzy) => this.toModel(autorzy));
    }

    private toModel(AutorzyDocument: AutorzyDocument) {
        return {
            _id: AutorzyDocument._id.toHexString(),
            ...AutorzyDocument,
        };
    }
}
