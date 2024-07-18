import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    FibonacciModule,
    MongooseModule.forRoot(
      'mongodb://kiwanas_admin:MoiCvj48CJ28ow@85.209.95.164:27017/kiwanas',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
