import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const MYSQL_CONFIG: TypeOrmModuleOptions = {
  name: 'my_bloc',
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'guohao19940719',
  database: 'mybloc',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
