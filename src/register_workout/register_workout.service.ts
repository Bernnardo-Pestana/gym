import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterWorkout } from "./entities/register_workout.entity";

export class RegisterWorkoutService {

    constructor(
        @InjectRepository(RegisterWorkout)
        private registerRepository: Repository<RegisterWorkout>,
    ){}

    async create(body :any)
    {
        try {
            const user = body.user_id;
            const treinos = body.treino;

            for(const treino of treinos)
            {
                const t = {
                    register : user,
                    workout : treino.id
                }


                await this.registerRepository.save(t);
            }


            
        } catch (error) {
            console.log(error)
        }
    }

}