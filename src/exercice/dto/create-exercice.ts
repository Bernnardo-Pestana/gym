import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateExercicioDto {
  
    @IsNotEmpty()
    readonly nome: string;
  
    @IsNotEmpty()
    readonly type: string

  }
  