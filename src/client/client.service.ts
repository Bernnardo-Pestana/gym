import { CreateClientDto} from './dto/create-client.dto'
import { Client } from './entities/client.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()

export class ClientService {
    constructor(
        @InjectRepository(Client)
         private clientRepository: Repository<Client>,
    ) {}

    async getAllClients(){
    
        return this.clientRepository.find();
    }

    async create(body : CreateClientDto){

        
        try {
            const response = await this.clientRepository.save(body);
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async update(id:number,body : any){


        return this.clientRepository.save(body);
    
    }

    async getclientbyid(id:number)
    {
        return this.clientRepository.findOneBy({id : id})
    }
}