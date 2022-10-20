import { Module } from '@nestjs/common';

import {Sales} from '../../entities/sales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from '../Sales/sales.service';
import { SalesController } from '../Sales/sales.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  providers: [SalesService],
  controllers: [SalesController],
  exports: [TypeOrmModule]
})

export class SalesModule {}