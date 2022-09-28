import {  IsString } from 'class-validator';
import { RegisterWorkout } from '../../register_workout/entities/register_workout.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Exercice } from '../../exercice/entities/exercice.entity';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

  @IsString()
  @Column({ type: "varchar", length: 100 })
    name: string;

  @IsString()
  @Column({ type: "char", length: 1})
    serie: string;

   @OneToMany(() => RegisterWorkout, (register_workout) => register_workout.id)
   register_workout: RegisterWorkout[]
    

}