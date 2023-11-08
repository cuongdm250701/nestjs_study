import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}

bootstrap();
