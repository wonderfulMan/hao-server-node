import './dev/alias';
import { APP_SERVER_CONFIG } from './config';

import { NestFactory } from '@nestjs/core';
import { RootModule } from '@module/root.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  useContainer(app.select(RootModule), { fallbackOnErrors: true });
  await app.listen(APP_SERVER_CONFIG.SEV_DEV_PORT);
}

bootstrap();
