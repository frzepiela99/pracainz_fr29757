import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { PlikRepository } from './plik.repository';
import { PlikService } from './plik.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Plik } from 'src/uploads/models/plik.model';
import { PlikSchema } from './models/plik.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
    name: Plik.name, 
    schema: PlikSchema
  }
]),
],
  providers: [UploadsService, PlikRepository, PlikService],
  controllers: [UploadsController]
})
export class UploadsModule {}
