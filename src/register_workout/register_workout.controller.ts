import { Body, Controller, Post } from "@nestjs/common";
import { RegisterWorkoutService } from "./register_workout.service";

@Controller('register-workout')
export class RegisterWorkoutController {
    constructor(
        private registerworkoutService: RegisterWorkoutService
    ){}

    @Post()
    async create(@Body() body :any){
        return await this. registerworkoutService.create(body);
    }
}