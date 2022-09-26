import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { ClientService} from './client.service';
import { CreateClientDto} from './dto/create-client.dto'

@Controller('client')

export class ClientController {
    
    constructor( private clientService : ClientService ){}

    @Get()
    async findAll(){
        return await this.clientService.getAllClients();
    }

    @Post()
    async create(@Body() body:  CreateClientDto ){
        return await this.clientService.create( body);
    }

    @Put(":id")
    async update(@Param("id") id :number, @Body() body:  CreateClientDto ){
        return await this.clientService.update( id, body);
    }
}