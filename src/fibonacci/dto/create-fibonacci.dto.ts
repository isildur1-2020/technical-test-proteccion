import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFibonacciDto {
  @IsNotEmpty()
  @IsString()
  public time: string;

  @IsNotEmpty()
  @IsString()
  public serie: string;
}
