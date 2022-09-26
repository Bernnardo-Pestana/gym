import {  IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Exercice {
    @PrimaryGeneratedColumn()
    id: number;

  @IsString()
  @Column({ type: "varchar", length: 100 })
    nome: string;

  @IsString()
  @Column({ type: "varchar", length: 30 })
    type: string;

}