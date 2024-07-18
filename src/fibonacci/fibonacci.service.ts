import { Injectable } from '@nestjs/common';
import { CreateFibonacciDto } from './dto/create-fibonacci.dto';
import { UpdateFibonacciDto } from './dto/update-fibonacci.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fibonacci, FibonacciDocument } from './entities/fibonacci.entity';
import mongoose from 'mongoose';
import { FibonacciUtil } from 'src/lib/Fibonacci';
import { getCurrentTimeInfo, getMomentFormatted } from 'src/lib/utils';

@Injectable()
export class FibonacciService {
  constructor(
    @InjectModel(Fibonacci.name)
    private fibonacciModel: mongoose.Model<FibonacciDocument>,
  ) {}

  async create(createFibonacciDto: CreateFibonacciDto) {
    const { minutes, seconds } = getCurrentTimeInfo();
    const serie = FibonacciUtil.generate({
      firstSeed: Number(minutes[0]),
      secondSeed: Number(minutes[1]),
      resultsCount: Number(seconds),
    });
    const newSerie = new this.fibonacciModel({
      time: getMomentFormatted({ format: 'HH:mm:ss' }),
      serie: JSON.stringify(serie),
    });
    await newSerie.save();
    return 'Fibonacci serie created successfully!';
  }

  async findAll() {
    return await this.fibonacciModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fibonacci`;
  }

  update(id: number, updateFibonacciDto: UpdateFibonacciDto) {
    return `This action updates a #${id} fibonacci`;
  }

  remove(id: number) {
    return `This action removes a #${id} fibonacci`;
  }
}
