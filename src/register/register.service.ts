import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRegisterDto } from "./dto/create-register.dto";
import { Register } from "./entities/register.entity";

export class RegisterService {
    constructor(
        @InjectRepository(Register)
         private registerRepository: Repository<Register>,
    ) {}

    async getAllRegister(){
    
        return this.registerRepository.find();
    }

    async create(body : CreateRegisterDto){
    
        return true;
    }

    async update(id:number,body : any){
    
        return true;
    }
}