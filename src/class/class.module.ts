import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ClassesController} from './class.controller'
import {ClassesService} from './class.service'
import {Classes} from './entities/class.entity'


@Module({
    imports:[
      TypeOrmModule.forFeature([Classes]),
    ],
    controllers: [ClassesController],
    providers: [
        ClassesService,
    ],
    exports: [ClassesService]
  })
export class ClassesModule {}

