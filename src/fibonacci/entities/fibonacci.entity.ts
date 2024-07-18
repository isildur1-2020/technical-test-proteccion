import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type FibonacciDocument = mongoose.HydratedDocument<Fibonacci>;

@Schema({ timestamps: true, versionKey: false })
export class Fibonacci {
  public _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: true,
  })
  public time: string;

  @Prop({
    required: true,
  })
  public serie: string;
}

export const FibonacciSchema = SchemaFactory.createForClass(Fibonacci);
