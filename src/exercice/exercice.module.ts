import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercice } from "./entities/exercice.entity";
import { ExerciceController } from "./exercice.controller";
import { ExerciceService } from "./exercice.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([Exercice]),
    ],
    controllers: [ExerciceController],
    providers: [
        ExerciceService,
    ],
    exports: [ExerciceService]
  })
export class ExerciceModule {}