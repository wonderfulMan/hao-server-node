import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthException extends HttpException {
  constructor(message: any, code?: number) {
    super({ code: code || -1, message }, HttpStatus.UNAUTHORIZED);
  }
}

export default AuthException;
