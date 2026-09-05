import { Injectable } from '@nestjs/common';

@Injectable()
export class RentcarBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
