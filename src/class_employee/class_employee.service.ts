import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassesEmployees } from './entities/classEmployee.entity';


@Injectable()
export class ClassEmployeeService {
    constructor(
        @InjectRepository(ClassesEmployees)
        private classEmployeeRepository: Repository<ClassesEmployees>,
    ){}
}
