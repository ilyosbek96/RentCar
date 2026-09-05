import { Test, TestingModule } from '@nestjs/testing';
import { RentcarBatchController } from './rentcar-batch.controller';
import { RentcarBatchService } from './rentcar-batch.service';

describe('RentcarBatchController', () => {
  let rentcarBatchController: RentcarBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RentcarBatchController],
      providers: [RentcarBatchService],
    }).compile();

    rentcarBatchController = app.get<RentcarBatchController>(RentcarBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rentcarBatchController.getHello()).toBe('Hello World!');
    });
  });
});
