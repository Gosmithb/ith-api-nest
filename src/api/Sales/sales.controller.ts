import { Body, Controller, Post } from '@nestjs/common';
import { SalesService } from './sales.service';
import { ISales } from '../../models/sales';

@Controller('sales')
export class SalesController {
    constructor( private salesService : SalesService ){
    }

    @Post()
    Create(@Body() params : ISales ){
        try {
            return this.salesService.create(params)
        } catch (error) {
            console.log(error)
        }
    }
}