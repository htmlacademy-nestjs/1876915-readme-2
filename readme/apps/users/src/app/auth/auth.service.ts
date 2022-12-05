import * as dayjs from 'dayjs';
import { Injectable } from '@nestjs/common';
import { UserMemoryRepository } from '../user/user-memory.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from '../user/user.entity';
import { UserAuthMessages } from './auth.constant';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserMemoryRepository
  ) { }

  async register(dto: CreateUserDto) {
    const { email, firstName, lastName, password } = dto;
    const date = dayjs().toDate();
    const user = {
      _id: '',
      email,
      firstName,
      lastName,
      avatar: '',
      password: '',
      createdAt: date,
      updatedAt: date,
    };

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new Error(UserAuthMessages.ALREADY_EXISTS);
    }

    const userEntity = await new UserEntity(user)
      .setPassword(password)

    return this.userRepository.create(userEntity);
  }

  async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(UserAuthMessages.NOT_FOUND);
    }

    const userEntity = new UserEntity(existUser);
    if (! await userEntity.comparePassword(password)) {
      throw new Error(UserAuthMessages.WRONG_PASSWORD);
    }

    return userEntity.toObject();
  }

  async getUser(id: string) {
    return this.userRepository.findById(id);
  }

}
