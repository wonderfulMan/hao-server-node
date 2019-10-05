import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { GlobalHttpExceptionFilerFilter } from '@global/filter/globalHttpException.filter';
import { GlobalValidatorPipePipe } from '@global/pipe/globalValidatorPipe.pipe';

// 全局http异常过滤
const GlobalHttpExceptionProvider = {
  provide: APP_FILTER,
  useClass: GlobalHttpExceptionFilerFilter,
};
const GlobalValidatorPipeProvider = {
  provide: APP_PIPE,
  useClass: GlobalValidatorPipePipe,
};
export {
  GlobalHttpExceptionProvider,
  GlobalValidatorPipeProvider,
};
