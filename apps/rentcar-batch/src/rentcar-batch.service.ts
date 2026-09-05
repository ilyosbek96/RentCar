import { Injectable } from '@nestjs/common';

@Injectable()
export class RentcarBatchService {
  getHello(): string {
    return 'Welcome to Rentcar BATCH Servicer!';
  }
}
