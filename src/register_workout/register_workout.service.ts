import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterWorkout } from "./entities/register_workout.entity";

export class RegisterWorkoutService {

    constructor(
        @InjectRepository(RegisterWorkout)
        private registerRepository: Repository<RegisterWorkout>,
    ){}

}