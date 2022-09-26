import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { RegisterService} from './register.service';
import { CreateRegisterDto} from './dto/create-register.dto'

@Controller('register')

export class RegisterController {
    
    constructor( private registerService : RegisterService ){}

    @Get()
    async findAll(){
        return await this.registerService.getAllRegister();
    }

    @Post()
    async create(@Body() body:  CreateRegisterDto ){
        return await this.registerService.create( body);
    }

    @Put(":id")
    async update(@Param("id") id :number, @Body() body:  CreateRegisterDto ){
        return await this.registerService.update( id, body);
    }
}