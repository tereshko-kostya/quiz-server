import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const PORT = process.env.PORT || 8000;
  const HOST = process.env.HOST || '127.0.0.1';

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.use(compression())

  await app.listen(PORT, '0.0.0.0', () => { console.log(`Server is running on ${HOST}:${PORT}`) });
}

bootstrap();