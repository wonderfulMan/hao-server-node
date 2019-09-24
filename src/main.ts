import './dev/alias';
import { APP_SERVER } from './config';

import { NestFactory } from '@nestjs/core';
import { RootModule } from '@module/root.module';


async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(APP_SERVER.SEV_DEV_PORT);
}
bootstrap();
