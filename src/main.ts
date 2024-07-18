import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PREFIX = '/v1.0/api';
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(PREFIX);
  await app.listen(8000);
}
bootstrap();
