import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisterWorkout } from "./entities/register_workout.entity";
import { RegisterWorkoutController } from "./register_workout.controller";
import { RegisterWorkoutService } from "./register_workout.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([RegisterWorkout]),
    ],
    controllers: [RegisterWorkoutController],
    providers: [
      RegisterWorkoutService
    ],
    exports: [RegisterWorkoutService]
  })
export class RegisterWorkoutModule {}