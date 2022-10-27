import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateExercicioDto } from "./dto/create-exercice";
import { Exercice } from "./entities/exercice.entity";


export class ExerciceService{
    constructor(
    @InjectRepository(Exercice)
    private exerciceRepository: Repository<Exercice>
    ){}

    async getAll(){
        return await this.exerciceRepository.find()
    }


    async create(body: CreateExercicioDto){
       try {
        return await this.exerciceRepository.save(body)
       } catch (error) {
        console.log(error)
       }
    }

    async update(body: CreateExercicioDto){
        try {
         return await this.exerciceRepository.save(body)
        } catch (error) {
         console.log(error)
        }
    }

    async getbyID(id: number){
        try {
         return await this.exerciceRepository.findOneBy({id:id})
        } catch (error) {
         console.log(error)
        }
    }
}