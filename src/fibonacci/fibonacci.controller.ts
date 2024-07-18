import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { CreateFibonacciDto } from './dto/create-fibonacci.dto';
import { UpdateFibonacciDto } from './dto/update-fibonacci.dto';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @Post()
  create(@Body() createFibonacciDto: CreateFibonacciDto) {
    return this.fibonacciService.create(createFibonacciDto);
  }

  @Get()
  findAll() {
    return this.fibonacciService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fibonacciService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFibonacciDto: UpdateFibonacciDto,
  ) {
    return this.fibonacciService.update(+id, updateFibonacciDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fibonacciService.remove(+id);
  }
}
