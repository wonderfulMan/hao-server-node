import { IsIn, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { GENDER_VALUE } from '@module/user/enum';

class UserInfoDto {

  @IsOptional()
  @IsNotEmpty({ message: '用户名不能为空' })
  @MaxLength(1, { message: '用户名不能超过100' })
  nickName?: string;

  @IsOptional()
  @IsNotEmpty({ message: '真实姓名不能为空' })
  @MaxLength(100, { message: '真实姓名不能超过100' })
  username?: string;

  @IsOptional()
  @IsNotEmpty({ message: '性别不能为空' })
  @IsIn([GENDER_VALUE.Female, GENDER_VALUE.Male, GENDER_VALUE.Other], { message: '性别参数错误(0,1,2)' })
  gender?: GENDER_VALUE;

  @IsOptional()
  @IsNotEmpty({ message: '年龄不能为空' })
  age?: string;

}

export default UserInfoDto;
