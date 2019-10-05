import { Controller, Inject, Post, Body, Put, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { UserService } from '../service/user.service';
import { SuccessResponse } from '@common/response';
import UserLoginInfoDto from '@module/user/dto/userInfoLogin.dto';
import UserInfoDto from '@module/user/dto/userInfo.dto';
import UserEntity from '@module/user/entity/user.entity';
import AuthException from '@exception/authException';

@Controller('users')
class UserController {

  @Inject()
  private readonly userService: UserService;

  @Post('/hasRegister')
  public async hasRegister(user: UserLoginInfoDto) {
    let result: UserEntity;
    const { type, phoneOrEmail } = user;
    result = await this.userService.queryLoginUserResult(type, phoneOrEmail);
    // 如果存在返回 status 存在返回 1， 不存在返回 0
    return new SuccessResponse('success', { status: !!result });
  }

  @Put('/updateUserInfo')
  public async updateUserInfo(@Body() userInfo: UserInfoDto) {
    return '';
  }

  @Post('/login')
  @UseInterceptors(ClassSerializerInterceptor)
  public async login(@Body() user: UserLoginInfoDto) {
    let result: UserEntity;
    const { type, phoneOrEmail, password } = user;
    result = await this.userService.queryLoginUserResult(type, phoneOrEmail);
    // 如果存在 直接登陆
    if (result) {
      // 验证密码
      const correct = bcrypt.compareSync(password, result.password);
      if (!correct) {
        throw new AuthException('密码不正确，请重新输入');
      }
      return new SuccessResponse('登陆成功', result);
    } else {
      //  不存在 进行注册
      const res = await this.userService.registerUser(type, phoneOrEmail, password);
      if (res.raw.affectedRows) {
        return new SuccessResponse('注册成功', res);
      }
    }
  }
}

export default UserController;
