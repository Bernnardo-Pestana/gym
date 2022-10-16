import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassClient } from "./entities/class_client.entity";
import { ClassClientController } from "./class_client.controller";
import { ClassClientService } from "./class_client.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([ClassClient]),
    ],
    controllers: [ClassClientController],
    providers: [
        ClassClientService,
    ],
    exports: [ClassClientService]
  })
export class ClassClientModule {}