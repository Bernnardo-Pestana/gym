import { IsNotEmpty, IsOptional } from "class-validator";

export class createWorkout {

    @IsNotEmpty()
    readonly nome: string;
  
    @IsNotEmpty()
    readonly serie: string
}