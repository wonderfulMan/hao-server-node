import { Inject, Injectable } from '@nestjs/common';
import UserRepository from '@module/user/repository/user.repository';
import UserEntity from '@module/user/entity/user.entity';
import { USER_TOKEN_TYPE } from '@common/enum/user';
import { InsertResult } from 'typeorm';

@Injectable()
export class UserService {
  @Inject()
  private readonly userRepository: UserRepository;

  async queryEmail(phone: string): Promise<UserEntity | undefined> {
    return await this
      .userRepository
      .queryEmail(phone);
  }

  async queryPhone(email: string): Promise<UserEntity | undefined> {
    return await this
      .userRepository
      .queryPhone(email);
  }

  async queryLoginUserResult(type: string, phoneOrEmail: string): Promise<UserEntity | undefined> {
    switch (type) {
      case USER_TOKEN_TYPE.WEB_EMAIL:
        //  查看email是否注册
        return await this.queryEmail(phoneOrEmail);
      case USER_TOKEN_TYPE.WEB_PHONE:
        //  查看phone是否注册
        return await this.queryPhone(phoneOrEmail);
    }
  }

  async registerUser(type: string, phoneOrEmail: string, password: string): Promise<InsertResult> {
    let result: InsertResult;
    switch (type) {
      case USER_TOKEN_TYPE.WEB_PHONE:
        result = await this.userRepository.insertUserByPhone(phoneOrEmail, password);
        break;
      case USER_TOKEN_TYPE.WEB_EMAIL:
        result = await this.userRepository.insertUserByEmail(phoneOrEmail, password);
        break;
    }
    return result;
  }

}
