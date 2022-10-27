import { Body, Controller, Post, Put } from "@nestjs/common";
import { ExerciceWorkoutService } from "./exercice_workout.service";

@Controller('exercice_workout')
export class ExerciceWorkoutController {
    constructor(
        private exerciceworkoutservice: ExerciceWorkoutService,
    ) {}


    @Post()
    async create(@Body() body: any){
        return await this.exerciceworkoutservice.create(body);
    }

    @Put()
    async update(@Body() body: any){
        return await this.exerciceworkoutservice.update(body);
    }
}