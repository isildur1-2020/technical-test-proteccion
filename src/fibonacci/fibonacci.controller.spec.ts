import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciController } from './fibonacci.controller';
import { FibonacciService } from './fibonacci.service';

describe('FibonacciController', () => {
  let controller: FibonacciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibonacciController],
      providers: [FibonacciService],
    }).compile();

    controller = module.get<FibonacciController>(FibonacciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
