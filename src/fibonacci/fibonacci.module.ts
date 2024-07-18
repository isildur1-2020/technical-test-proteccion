import { Module } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { FibonacciController } from './fibonacci.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fibonacci, FibonacciSchema } from './entities/fibonacci.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Fibonacci.name,
        schema: FibonacciSchema,
      },
    ]),
  ],
  controllers: [FibonacciController],
  providers: [FibonacciService],
})
export class FibonacciModule {}
