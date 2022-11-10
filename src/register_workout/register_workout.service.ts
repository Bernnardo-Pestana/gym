import { HttpException, HttpStatus } from "@nestjs/common";
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

    async delete(id : number)
    {
        try {
            const response = this.registerRepository.delete({register: {
                  id : id
                }
            });
        return response;
        } catch (error) {
            throw new HttpException(
                'Erro ao deletar',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getbyClient(id:number)
    {
        try {
            const result = await this.registerRepository.query('select workout.name as Nome,workout.serie as Serie,exercice.nome as Exercicio,exercice_workout.peso as Peso, ' +
            'exercice_workout.serie as serie, exercice_workout.repeticao as Repeticao, exercice_workout.descanco as Descanço, exercice_workout.observacao as Obs   from  register_workout '+
            'inner join workout '+
            'on workout.id = register_workout.workoutId '+
            'inner join exercice_workout '+
            'on exercice_workout.workoutId = register_workout.workoutId '+
            'inner join exercice '+
           ' on exercice.id = exercice_workout.exerciceId '+
           ' where register_workout.registerId ='+ id  + ' order by workout.serie asc;')

           const treino = result.reduce((groups, item) => {
            const group = (groups[item.Serie] || []);
              group.push(item);
              groups[item.Serie] = group;
              return groups;
          }, {});
  


            return treino;
        } catch (error) {
            throw new HttpException(
                'Erro ao buscar treinos',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

}