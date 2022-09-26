import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Register } from "./entities/register.entity";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([Register]),
    ],
    controllers: [RegisterController],
    providers: [
        RegisterService,
    ],
    exports: [RegisterService]
  })
export class RegisterModule {}