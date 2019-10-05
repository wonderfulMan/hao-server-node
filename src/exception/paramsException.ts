import { HttpException, HttpStatus } from '@nestjs/common';

export class ParamsException extends HttpException {
  constructor(message: any, code?: number) {
    super({ code: code || -1, message }, HttpStatus.FORBIDDEN);
  }
}
