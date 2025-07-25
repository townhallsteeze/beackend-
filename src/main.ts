import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://mrbeast-lyart.vercel.app', // your frontend URL
    credentials: true, // set to true if you're using cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  })
  await app.listen(process.env.PORT ??  4000);
}
bootstrap();
