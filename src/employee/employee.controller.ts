import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { EmployeeService} from './employee.service';
import { CreateEmployeeDto} from './dto/create-employee.dto'

@Controller('client')

export class EmployeeController {
    
    constructor( private employeeService : EmployeeService ){}

    @Get()
    async findAll(){
        return await this.employeeService.getAllEmployees();
    }

    @Post()
    async create(@Body() body:  CreateEmployeeDto ){
        return await this.employeeService.create( body);
    }

    @Put(":id")
    async update(@Param("id") id :number, @Body() body:  CreateEmployeeDto ){
        return await this.employeeService.update( id, body);
    }
}