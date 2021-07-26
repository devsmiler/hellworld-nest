import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//nestFactory를 호출한다.
  await app.listen(8000);// 그리고 3000포트를 리슨 중입니다.
}
bootstrap();
