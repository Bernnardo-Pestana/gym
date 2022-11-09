import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
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

    @Delete(":id")
    async delete(@Param("id") id :number){
        return await this.registerworkoutService.delete(id);
    }
}