import { HttpException, HttpStatus, Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto} from './dto/create-employee.dto'
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private clientRepository: Repository<Employee>,
    ) {}

    async getAllEmployees(){
    
        return true;
    }

    async create(body : CreateEmployeeDto){
    
        return true;
    }

    async update(id:number,body : any){
    
        return true;
    }

}