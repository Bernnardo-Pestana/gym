import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciceWorkout } from "./entities/exercice_workout.entity";
import { ExerciceWorkoutController } from "./exercice_workout.controller";
import { ExerciceWorkoutService } from "./exercice_workout.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([ExerciceWorkout]),
    ],
    controllers: [ExerciceWorkoutController],
    providers: [ExerciceWorkoutService],
    exports: [ExerciceWorkoutService]
  })
export class ExerciceWorkoutModule {}