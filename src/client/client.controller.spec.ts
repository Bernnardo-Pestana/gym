import {ClientController} from './client.controller'
import {ClientService} from './client.service'
import {CreateClientDto} from './dto/create-client.dto'
import { Test  } from '@nestjs/testing'

describe("ClientController", () => {

    let clientController: ClientController;

    const mockClientService = {
        create: jest.fn((dto =>{
            return {
              id : Date.now(),
              ...dto
            }
          })),
        getAllClients : jest.fn(( () => {
            return []
        })),

        update: jest.fn((dto =>{
            return true
          })),
        
    }
    

    beforeEach(async () =>{
        const module = await Test.createTestingModule({
            controllers: [ClientController],
            providers : [ClientService],
        })
        .overrideProvider(ClientService)
        .useValue(mockClientService)
        .compile();


        clientController = module.get<ClientController>(ClientController);
    })


    it("should be defined",async () => {
        expect(clientController).toBeDefined();
    })


    it("should create", async () => {
        const dto : CreateClientDto = {
            nome: 'roger',
            cpf: '0',
            telefone: '',
            endereco: '0',
            email: '0'
        }
    expect(await clientController.create(dto)).toEqual({
        id: expect.any(Number),
        ... dto
    });
    })

    it("should return all clients", async () =>{
        expect(await clientController.findAll()).toEqual([])
    })

    it("should update a client", async ()=>{
        const dto : CreateClientDto = {
            nome: 'roger',
            cpf: '0',
            telefone: '',
            endereco: '0',
            email: '0'
        }
        expect(await clientController.update(1,dto)).toEqual(true)
    })

    


})