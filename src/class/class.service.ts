import { HttpException, HttpStatus, Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDTO } from './dto/create-class.tdo'
import { Classes } from './entities/class.entity';


@Injectable()
export class ClassesService{
   
    constructor(
        @InjectRepository(Classes)
         private classesRepository: Repository<Classes>,
    ) {}

    async create(){

    }

    async update(){

    }

    async delete(){

    }

    async getClasses (){
        
    }
}