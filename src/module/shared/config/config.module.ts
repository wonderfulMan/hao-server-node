import { Module } from '@nestjs/common';
import { ConfigService } from '@module/shared/config/config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
