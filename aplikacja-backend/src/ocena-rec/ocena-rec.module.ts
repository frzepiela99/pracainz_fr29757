import { Module } from '@nestjs/common';
import { OcenaRecController } from './ocena-rec.controller';
import { OcenaRecService } from './ocena-rec.service';
import { OcenaRecResolver } from './ocena-rec.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OcenaRecenzenta } from './models/ocena-rec.model';
import { OcenaRecenzentSchema } from './models/ocena-rec.schema';
import { OcenaRecenzentRepository } from './ocena-rec.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
    name: OcenaRecenzenta.name, 
    schema: OcenaRecenzentSchema
  }
]),
],
  controllers: [OcenaRecController],
  providers: [OcenaRecService, OcenaRecResolver, OcenaRecenzentRepository, OcenaRecController]
})
export class OcenaRecModule {}
