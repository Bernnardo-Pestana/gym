import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegisterWorkout } from "./entities/register_workout.entity";

@Module({
    imports:[
      TypeOrmModule.forFeature([RegisterWorkout]),
    ],
    controllers: [],
    providers: [
    ],
    exports: []
  })
export class RegisterWorkoutModule {}