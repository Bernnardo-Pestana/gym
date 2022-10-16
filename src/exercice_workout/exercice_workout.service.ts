import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExerciceWorkout } from "./entities/exercice_workout.entity";

export class ExerciceWorkoutService  { 
    
    constructor(
        @InjectRepository(ExerciceWorkout)
         private registerRepository: Repository<ExerciceWorkout>,
    ) {}

    async create(){}

    async update(){}

    async delete(){}
}