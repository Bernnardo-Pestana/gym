import { Controller, Post } from "@nestjs/common";
import { ExerciceWorkoutService } from "./exercice_workout.service";

@Controller('exercice_workout')
export class ExerciceWorkoutController {
    constructor(
        private exerciceworkoutservice: ExerciceWorkoutService,
    ) {}


    @Post()
    async create(){
        return await this.exerciceworkoutservice.create();
    }
}