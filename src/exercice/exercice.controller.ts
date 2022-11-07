import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject, Delete} from '@nestjs/common';
import { CreateExercicioDto } from './dto/create-exercice';
import { ExerciceService } from './exercice.service';

@Controller('exercice')

export class ExerciceController {
    constructor(
        private exerciceService : ExerciceService 
    ){}

    @Get()
    async getAll(){
        return await this. exerciceService.getAll();
    }

    @Post()
    async create(@Body() body :CreateExercicioDto){
        return await this. exerciceService.create(body);
    }

    @Put(":id")
    async update(@Body() body){
        return await this. exerciceService.update(body);
    }

    @Get(":id")
    async getbyID(@Param(":id") id :number){
        return await this.exerciceService.getbyID(id);
    }

    @Post("/delete")
    async delete(@Body() body){
        return await this.exerciceService.delete(body.id);
    }
}