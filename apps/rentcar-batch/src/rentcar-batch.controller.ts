import { Controller, Get } from '@nestjs/common';
import { RentcarBatchService } from './rentcar-batch.service';

@Controller()
export class RentcarBatchController {
  constructor(private readonly rentcarBatchService: RentcarBatchService) {}

  @Get()
  getHello(): string {
    return this.rentcarBatchService.getHello();
  }
}
