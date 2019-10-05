import { IsNotEmpty, IsIn, MaxLength } from 'class-validator';
import { IsPhoneOrEmail } from '@common/decorator';
import { USER_TOKEN_TYPE } from '@common/enum/user';

class UserLoginInfoDto {

  @IsNotEmpty({ message: '登陆方式必传' })
  @IsIn([USER_TOKEN_TYPE.WEB_EMAIL, USER_TOKEN_TYPE.WEB_PHONE], { message: '登陆方式参数错误' })
  type: string;

  @IsPhoneOrEmail()
  phoneOrEmail: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @MaxLength(100, { message: '密码长度不能超过100' })
  password: string;

}

export default UserLoginInfoDto;
