import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublikacjaController } from './publikacja.controller';
import { PublikacjaService } from './publikacja.service';
import { PublikacjaSchema } from './publikacja.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Publikacja', schema: PublikacjaSchema}])],
  controllers: [PublikacjaController],
  providers: [PublikacjaService]
})
export class PublikacjaModule {}
