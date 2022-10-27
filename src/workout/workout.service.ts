import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createWorkout } from "./dto/create-workout";
import { Workout } from "./entities/workout.entity";

export class WorkoutService {
    constructor(
        @InjectRepository(Workout)
         private workoutRepository: Repository<Workout>,
    ) {}

    async getAllWorkout(){
    
        return this.workoutRepository.find();
    }

    async create(body : createWorkout){

        try {
            const response = await this.workoutRepository.save(body);

            return response.id

            
        } catch (error) {
         console.log(error)   
        }
    }

    async update(id:number,body : any){
        
        
        try {
            const response = await this.workoutRepository.save(body);

            return response.id

            
        } catch (error) {
         console.log(error)   
        }
    }

    async getById(id:number){
        
        try {

            return await this.workoutRepository.findOneBy({id:id});
            
        } catch (error) {
            console.log(error)
        }

    }

    async findExerciceByWorkoutID(id:number)
    {
        try {

           const resp = await this.workoutRepository.query(
                        'Select ew.id as id, ex.nome as nome, ew.serie as serie, ew.peso as peso, ew.descanco as descanco, ew.observacao as observacao,ew.repeticao as repeticao  '+
                        'from workout wo inner join exercice_workout ew on ew.workoutId = wo.id '+
                        'inner join exercice ex on ex.id = ew.exerciceId '+
                        'where wo.id ='+ id + ' order by ew.id asc'
                        )

            return resp
            
        } catch (error) {
            console.log(error)
        }
    }
}