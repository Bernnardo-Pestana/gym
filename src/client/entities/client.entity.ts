import {  IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

  @IsString()
  @Column({ type: "varchar", length: 100 })
    nome: string;

  @IsString()
  @Column({ type: "varchar", length: 15 })
    cpf: string;

  @IsString()
  @Column({ type: "varchar", length:20 })
    telefone: string;
  
  @IsString()
  @Column({ type: "varchar", length: 250})
    endereco: string;

  @IsString()
  @Column({ type: "varchar", length: 75})
    email: string;

}