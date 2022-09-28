import {  IsString } from 'class-validator';
import { RegisterWorkout } from '../../register_workout/entities/register_workout.entity';
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

  @OneToMany(() => RegisterWorkout, (register_workout) => register_workout.id)
    register_workout: RegisterWorkout[]
     

}