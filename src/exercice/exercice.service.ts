import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exercice } from "./entities/exercice.entity";


export class ExerciceService{
    constructor(
    @InjectRepository(Exercice)
    private exerciceRepository: Repository<Exercice>
    ){}
}