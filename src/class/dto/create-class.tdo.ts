
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateClassDTO{

    @IsNotEmpty()
    readonly nome: string;
  
    @IsNotEmpty()
    readonly time: string
  
    @IsNotEmpty()
    readonly data: string;
  
    @IsNotEmpty()
    readonly employeeId: string;
  
}