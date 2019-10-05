import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'class-validator';

interface ClassValidatorResponse {
  message: string;
  code: number;
}

// 全局http异常过滤器
@Catch(HttpException)
export class GlobalHttpExceptionFilerFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const customErrorResponse = exception.getResponse();
    let responseJson = {};
    // 判断是否为class-validator校验的参数异常
    if (this.isClassValidatorException(exception)) {
      responseJson = GlobalHttpExceptionFilerFilter.formatClassValidatorResponse(exception);
    } else {
      // 其他http异常
      responseJson = customErrorResponse;
    }
    response
      .status(status)
      .json(responseJson);
  }

  // 判断当前http异常是否为class-validator抛出
  isClassValidatorException(exception: HttpException): boolean {
    const error = exception.message;
    return error.message && Array.isArray(error.message) && error.message.every(it => it instanceof ValidationError);
  }

  // 格式化class-validator校验返回
  static formatClassValidatorResponse(exception: HttpException): ClassValidatorResponse {
    const validatorInfo = exception.message.message;
    let message = null;
    validatorInfo.forEach(info => {
      const constraints = info.constraints;
      Object.keys(constraints).forEach(type => {
        const hasFirst = constraints[type];
        if (hasFirst) {
          message = hasFirst;
        }
      });
    });
    return { message, code: -1 };
  }
}
