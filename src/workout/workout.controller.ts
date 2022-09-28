import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { WorkoutService} from './workout.service';
import { createWorkout } from './dto/create-workout'

@Controller('workout')

export class WorkoutController {
    
    constructor( private workoutService : WorkoutService ){}

    @Get()
    async findAll(){
        return await this.workoutService.getAllWorkout();
    }

    @Post()
    async create(@Body() body:  createWorkout ){
        return await this.workoutService.create( body);
    }

    @Put(":id")
    async update(@Param("id") id :number, @Body() body:  createWorkout ){
        return await this.workoutService.update( id, body);
    }
}