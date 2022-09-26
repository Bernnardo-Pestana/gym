import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ClientController} from './client.controller'
import {ClientService} from './client.service'
import {Client} from './entitities/client.entity'


@Module({
    imports:[
      TypeOrmModule.forFeature([Client]),
    ],
    controllers: [ClientController],
    providers: [
      ClientService,
    ],
    exports: [ClientService]
  })
export class ClientModule {}

