import { Module } from '@nestjs/common';
import { RecenzentController } from './recenzent.controller';
import { RecenzentService } from './recenzent.service';
import { RecenzentResolver } from './recenzent.resolver';

@Module({
  controllers: [RecenzentController],
  providers: [RecenzentService, RecenzentResolver]
})
export class RecenzentModule {}
