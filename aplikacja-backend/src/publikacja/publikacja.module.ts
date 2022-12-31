import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PublikacjaRepository } from './publikacja.repository';
import { PublikacjaResolver } from './publikacja.resolver';
import { PublikacjaService } from './publikacja.service';
import { Publikacja } from './models/publikacja.model';
import { PublikacjaSchema } from './models/publikacja.model';



@Module({
  imports: [
    MongooseModule.forFeature([
      {
    name: Publikacja.name, 
    schema: PublikacjaSchema
  }
]),
],
  controllers: [],
  providers: [PublikacjaResolver, PublikacjaService, PublikacjaRepository],
})
export class PublikacjaModule {}
