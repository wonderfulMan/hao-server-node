import { Module } from '@nestjs/common';

import { GlobalHttpExceptionProvider, GlobalValidatorPipeProvider } from './root.provide';
import { UserModule } from './user/user.module';
import { SharedModule } from '@module/shared/shared.module';

@Module({
  imports: [SharedModule, UserModule],
  providers: [GlobalHttpExceptionProvider, GlobalValidatorPipeProvider],
})
export class RootModule {}
