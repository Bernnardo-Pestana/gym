import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { ClassesService } from './class.service';

@Controller('classes')

export class ClassesController {
    constructor(
        private classeService :ClassesService 
    ){}

    @Get()
    async getClasses(){
        await this.classeService.getClasses();
    }

    @Post()
    async create(){
        await this.classeService.create();
    }

}