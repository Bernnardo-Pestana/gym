import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExerciceWorkout } from "./entities/exercice_workout.entity";

export class ExerciceWorkoutService  { 
    
    constructor(
        @InjectRepository(ExerciceWorkout)
         private ExeWorRepository: Repository<ExerciceWorkout>,
    ) {}

    async create(body){
        try{
            const treino = body.treino_id
            const lista = body.lista;

            lista.map( async element =>{
                const obj = {
                    workout : treino,
                    exercice : element.id,
                    peso : element.peso ,
                    serie :element.serie,
                    descanco : element.descanco,
                    observacao: element.observacao,
                    repeticao: element.repeticao,
                }

                await this.ExeWorRepository.save(obj)
            })


        }catch(e){
            console.log(e)
        }
    }

    async update(body){
        try{
            const treino = body.treino_id
            const lista = body.lista;

            lista.map( async element =>{
                const obj = {
                    workout : treino,
                    exercice : element.id,
                    peso : element.peso ,
                    serie :element.serie,
                    descanco : element.descanco,
                    observacao: element.observacao,
                    repeticao: element.repeticao,
                }

                await this.ExeWorRepository.save(obj)
            })


        }catch(e){
            console.log(e)
        }
    }

    async delete(){}
}