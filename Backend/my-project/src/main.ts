import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "POST,GET,PUT,PATCH,DELETE,HEAD",
    credentials: true
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen({ port: 3001, host: '0.0.0.0' });
}
bootstrap();