import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import {ClientService} from './client.service'
import {CreateClientDto} from './dto/create-client.dto'
import { Client } from './entities/client.entity';

describe('ClientService', () => {
    let service: ClientService;
    
    const mockUserService = {
        
    }


    beforeEach(async () =>{
        const module : TestingModule = await Test.createTestingModule({
            providers: [
                ClientService, 
                {
                    provide : getRepositoryToken(Client),
                    useValue : mockUserService
                }
           ],
        }).compile();
        service = await module.get<ClientService>(ClientService)
    })

    it("should be defined", async () =>{
        expect(service).toBeDefined();
    })
})