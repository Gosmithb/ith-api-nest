import { Module } from '@nestjs/common';

import {Sales} from '../../entities/sales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from '../Sales/sales.service';
import { SalesController } from '../Sales/sales.controller';
import { DetailsService } from '../Details/details.service';


@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  providers: [SalesService, DetailsService],
  controllers: [SalesController],
  exports: [TypeOrmModule]
})

export class SalesModule {}