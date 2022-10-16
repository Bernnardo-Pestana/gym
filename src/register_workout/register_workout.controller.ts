import { Controller } from "@nestjs/common";
import { RegisterWorkoutService } from "./register_workout.service";

@Controller('register-workout')
export class RegisterWorkoutController {
    constructor(
        private registerworkoutService: RegisterWorkoutService
    ){}
}