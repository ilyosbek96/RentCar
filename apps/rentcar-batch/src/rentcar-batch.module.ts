import { Module } from '@nestjs/common';
import { RentcarBatchController } from './rentcar-batch.controller';
import { RentcarBatchService } from './rentcar-batch.service';

@Module({
  imports: [],
  controllers: [RentcarBatchController],
  providers: [RentcarBatchService],
})
export class RentcarBatchModule {}
