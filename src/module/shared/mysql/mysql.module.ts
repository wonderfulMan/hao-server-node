import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@module/shared/config/config.module';
import { ConfigService } from '@module/shared/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.TypeOrmMysqlConfig;
      },
    }),
  ],
})
export class MysqlModule {}
