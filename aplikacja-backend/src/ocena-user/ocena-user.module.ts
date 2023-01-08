import { Module } from '@nestjs/common';
import { OcenaUzytkownikaController } from './ocena-user.controller';
import { OcenaUzytkownikService } from './ocena-user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OcenaUzytownika } from './models/ocena-user.model';
import {  OcenaUzytkownikSchema } from './models/ocena-user.schema';
import { OcenaUzytkownikaRepository } from './ocena-user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
    name: OcenaUzytownika.name, 
    schema: OcenaUzytkownikSchema
  }
]),
],
  controllers: [OcenaUzytkownikaController],
  providers: [OcenaUzytkownikService, OcenaUzytkownikaRepository, OcenaUzytkownikaController]
})
export class OcenaUzytownikaModule {}
