import { IsNotEmpty } from "class-validator";

export class createClassEmployeeDTO{
    @IsNotEmpty()
    readonly user: number;
  
    @IsNotEmpty()
    readonly class: number
  
}