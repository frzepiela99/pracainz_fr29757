import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { GetUser2Args } from './dto/args/get-user2-args.dto';
import { GetUsersArgs } from './dto/args/get-users-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { User } from './models/user.model';
import { UserDocument } from './models/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(createUserData: CreateUserInput) {
    await this.validateCreateUserData(createUserData);
    const userDocument = await this.usersRepository.create({
      ...createUserData,
      password: await bcrypt.hash(createUserData.password, 10),
    });
    return this.toModel(userDocument);
  }

  private async validateCreateUserData(createUserData: CreateUserInput) {
    try {
      await this.usersRepository.findOne({ email: createUserData.email });
      throw new UnprocessableEntityException('Email already exists.');
    } catch (err) {}
  }

  async getUser(getUserArgs: GetUserArgs) {
    const userDocument = await this.usersRepository.findOne(getUserArgs);
    return this.toModel(userDocument);
  }

  // async getUsers(getUsersArgs: GetUsersArgs) {
  //   const userDocument = await this.usersRepository.find(getUsersArgs);
  //   return userDocument.map((user) => this.toModel(user));
  // }

  async getUsersAll(user: User) {
    const userDocument = await this.usersRepository.find({ GetUsersArgs });
    return userDocument.map((user) => this.toModel(user)).filter((u) => u._id !== user._id);
}

async getUserZalogowany(user: User) {
  const userDocument = await this.usersRepository.findOne(user);
  console.log('zalogowany', userDocument);
  return this.toModel(userDocument);
}

  async validateUser(email: string, password: string) {
    const userDocument = await this.usersRepository.findOne({ email });
    const passwordIsValid = await bcrypt.compare(
      password,
      userDocument.password,
    );
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return this.toModel(userDocument);
  }

  private toModel(userDocument: UserDocument): User {
    return {
      _id: userDocument._id.toHexString(),
      email: userDocument.email,
      imie: userDocument.imie,
      nazwisko: userDocument.nazwisko
    };
  }
}