import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorzyController } from './autorzy.controller';
import { AutorzyRepository } from './autorzy.repository';
import { AutorzyResolver } from './autorzy.resolver';
import { AutorzyService } from './autorzy.service';
import { Autorzy } from './models/autorzy.model';
import { AutorzySchema } from './models/autorzy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Autorzy.name,
        schema: AutorzySchema,
      },
    ]),
  ],
  controllers: [AutorzyController],
  providers: [AutorzyResolver, AutorzyService, AutorzyRepository]
})
export class AutorzyModule {}
