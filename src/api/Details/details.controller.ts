import { Body, Controller, Post } from '@nestjs/common';
import { IDetails } from '../../models/Details';
import { DetailsService } from './details.service';

@Controller('details')
export class DetailsController {
    constructor( 
        private detailsService : DetailsService ){
    }

    

}