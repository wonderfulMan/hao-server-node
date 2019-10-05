import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MYSQL_CONFIG } from '@config/mysql';

@Injectable()
export class ConfigService {
  get TypeOrmMysqlConfig(): TypeOrmModuleOptions {
    return MYSQL_CONFIG;
  }
}
