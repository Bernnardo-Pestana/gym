import { Controller, Post } from "@nestjs/common";
import { ClassClientService } from "./class_client.service";

@Controller('Class-Client')
export class ClassClientController {

    constructor(
        private classclient : ClassClientService,
    ){}

    @Post()
    async create(){
        
    }

}