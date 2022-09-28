import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciceWorkout } from "./entities/exercice_workout.entity";

@Module({
    imports:[
      TypeOrmModule.forFeature([ExerciceWorkout]),
    ],
    controllers: [],
    providers: [
    ],
    exports: []
  })
export class ExerciceWorkoutModule {}