import { PartialType } from '@nestjs/mapped-types';
import { CreateFibonacciDto } from './create-fibonacci.dto';

export class UpdateFibonacciDto extends PartialType(CreateFibonacciDto) {}
