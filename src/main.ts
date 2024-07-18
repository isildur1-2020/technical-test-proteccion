import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PREFIX = '/v1.0/api';
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  });
  app.setGlobalPrefix(PREFIX);
  await app.listen(8080);
}
bootstrap();
