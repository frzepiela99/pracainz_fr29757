import { Module } from '@nestjs/common';
import { RecenzentController } from './recenzent.controller';
import { RecenzentService } from './recenzent.service';
import { RecenzentResolver } from './recenzent.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Recenzent } from './models/recenzent.model';
import { RecenzentSchema } from './models/recenzent.schema';
import { RecenzentRepository } from './recenzent.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
    name: Recenzent.name, 
    schema: RecenzentSchema
  }
]),
],
  controllers: [RecenzentController],
  providers: [RecenzentService, RecenzentResolver,RecenzentRepository, RecenzentController]
})
export class RecenzentModule {}
