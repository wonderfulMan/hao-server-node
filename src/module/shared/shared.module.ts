import { Module } from '@nestjs/common';
import { ConfigModule } from '@module/shared/config/config.module';
import { MysqlModule } from '@module/shared/mysql/mysql.module';

@Module({
  imports: [MysqlModule, ConfigModule],
  exports: [MysqlModule, ConfigModule],
})
export class SharedModule {}
