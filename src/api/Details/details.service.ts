import { Details as DetailsEntity } from '../../entities/details.entity';
import { IDetails } from '../../models/Details';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {
    constructor( 
        @InjectRepository(DetailsEntity) 
            private detailsEntity : Repository< DetailsEntity > ){
    }

    async create( id_sales : number, details : IDetails[] ){
        details.forEach(element => {
            this.detailsEntity.insert(element);
        });

        return await this.detailsEntity.insert(details)
    }

    private Details : IDetails[] = [];

    getAll() : IDetails[]{
        return this.Details
    }
  



}
