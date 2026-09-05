import { NestFactory } from '@nestjs/core';
import { RentcarBatchModule } from './rentcar-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(RentcarBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
