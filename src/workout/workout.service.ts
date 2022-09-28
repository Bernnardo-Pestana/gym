import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createWorkout } from "./dto/create-workout";
import { Workout } from "./entities/workout.entity";

export class WorkoutService {
    constructor(
        @InjectRepository(Workout)
         private registerRepository: Repository<Workout>,
    ) {}

    async getAllWorkout(){
    
        return this.registerRepository.find();
    }

    async create(body : createWorkout){
    
        return true;
    }

    async update(id:number,body : any){
    
        return true;
    }
}