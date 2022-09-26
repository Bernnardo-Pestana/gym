import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateClientDto {
  
    @IsNotEmpty()
    readonly nome: string;
  
    @IsNotEmpty()
    readonly cpf: string
  
    @IsNotEmpty()
    readonly telefone: string;
  
    @IsNotEmpty()
    readonly endereco: string;
  
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
  }
  