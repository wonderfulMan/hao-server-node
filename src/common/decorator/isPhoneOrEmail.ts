import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

import RegExpMapString from '@util/regExp';
import UserLoginInfoDto from '@module/user/dto/userInfoLogin.dto';
import { Injectable } from '@nestjs/common';
import { USER_TOKEN_TYPE } from '@common/enum/user';

interface UserValidationArguments extends ValidationArguments {
  object: UserLoginInfoDto;
}

@ValidatorConstraint({ name: 'IsPhoneOrEmail' })
@Injectable()
export class IsPhoneOrEmailExist implements ValidatorConstraintInterface {
  private customErrorMessage: string;

  async validate(value: any, args: UserValidationArguments): Promise<boolean> {
    const type = args.object.type;
    if (type === USER_TOKEN_TYPE.WEB_EMAIL) {
      if (!value) {
        this.customErrorMessage = '邮箱不能为空';
        return false;
      }
      if (RegExpMapString.email.test(value)) {
        return true;
      } else {
        this.customErrorMessage = '邮箱格式不正确';
        return false;
      }
    }
    if (type === USER_TOKEN_TYPE.WEB_PHONE) {
      if (!value) {
        this.customErrorMessage = '手机号不能为空';
        return false;
      }
      if (RegExpMapString.phone.test(value)) {
        return true;
      } else {
        this.customErrorMessage = '手机号码不正确';
        return false;
      }
    }

  }

  defaultMessage(arg?: UserValidationArguments): string {
    return this.customErrorMessage;
  }
}

export function IsPhoneOrEmail(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPhoneOrEmailExist,
    });
  };
}
