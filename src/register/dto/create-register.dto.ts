import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateRegisterDto {
    @IsNotEmpty()
    client_ID : number;

    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    valid : Date | string 

}