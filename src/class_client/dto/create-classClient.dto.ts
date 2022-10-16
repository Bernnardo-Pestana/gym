import { IsNotEmpty } from "class-validator";

export class CreateClassClientDTO {

    @IsNotEmpty()
    readonly user: number;
  
    @IsNotEmpty()
    readonly class: number
}