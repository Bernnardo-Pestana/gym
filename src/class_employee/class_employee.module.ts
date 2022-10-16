
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEmployeeController } from './class_employee.controller';
import { ClassEmployeeService } from './class_employee.service';
import { ClassesEmployees } from './entities/classEmployee.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([ClassesEmployees]),
      ],
    controllers: [ClassEmployeeController],
    providers: [ClassEmployeeService],
})
export class ClassEmployeeModule {}
