import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserController from './controller/user.controller';
import { UserService } from './service/user.service';
import UserRepository from '@module/user/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [
    UserService,
  ],
})
export class UserModule {}
