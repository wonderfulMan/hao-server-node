import { ArgumentMetadata, PipeTransform, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { ParamsException } from '@exception/index';

@Injectable()
export class GlobalValidatorPipePipe implements PipeTransform {
  async transform(value: any, meta: ArgumentMetadata) {
    const object = plainToClass(meta.metatype, value);
    const result = await validate(object);
    if (result.length > 0) {
      throw new ParamsException(result);
    } else {
      return value;
    }
  }
}
