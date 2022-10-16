import { HttpException, HttpStatus, Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassClient } from './entities/class_client.entity';

@Injectable()
export class ClassClientService {
    

    constructor(
        @InjectRepository(ClassClient)
        private classclientRepository: Repository<ClassClient>,
    ){}


    async create(){

    }
    
    async update(){

    }
    async delete(){
        
    }

}