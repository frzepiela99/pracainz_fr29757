import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PublikacjaModule } from './publikacja/publikacja.module';
import { AdminModule } from './admin/admin.module';
import { AutorzyModule } from './autorzy/autorzy.module';
import { UploadsModule } from './uploads/uploads.module';

import * as Joi from 'joi';
import { MulterModule } from '@nestjs/platform-express';
import { RecenzentModule } from './recenzent/recenzent.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGODB_URI: Joi.string().required(),
        JWT_EXPIRATION: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    PublikacjaModule,
    AdminModule,
    AutorzyModule,
    UploadsModule,
    RecenzentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
