import {  IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

  @IsString()
  @Column({ type: "varchar", length: 100 })
    nome: string;

  @IsString()
  @Column({ type: "char", length: 11 })
    cpf: string;

  @IsString()
  @Column({ type: "char", length: 11 })
    telefone: string;
  
  @IsString()
  @Column({ type: "varchar", length: 250})
    endereco: string;

  @IsString()
  @Column({ type: "varchar", length: 75})
    email: string;

  @IsString()
  @Column({ type: "decimal"})
    salary: number;

}