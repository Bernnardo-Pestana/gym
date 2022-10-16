/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { ClassEmployeeService } from './class_employee.service';

@Controller('class-employee')
export class ClassEmployeeController {
    constructor(
        private classemployeeService : ClassEmployeeService
    ){}
}
