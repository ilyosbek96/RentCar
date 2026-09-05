import { Module } from '@nestjs/common';
import { RentcarBatchController } from './rentcar-batch.controller';
import { RentcarBatchService } from './rentcar-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RentcarBatchController],
  providers: [RentcarBatchService],
})
export class RentcarBatchModule {}
