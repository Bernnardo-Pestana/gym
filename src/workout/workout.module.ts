import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Workout } from "./entities/workout.entity";
import { WorkoutController } from "./workout.controller";
import { WorkoutService } from "./workout.service";

@Module({
    imports:[
      TypeOrmModule.forFeature([Workout]),
    ],
    controllers: [WorkoutController],
    providers: [
        WorkoutService,
    ],
    exports: [WorkoutService]
  })
export class WorkoutModule {}