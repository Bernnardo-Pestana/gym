import { Exercice } from "../../exercice/entities/exercice.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Workout } from "../../workout/entities/workout.entity";
import { IsNumber, IsString, isString } from "class-validator";

@Entity()
export class ExerciceWorkout
{
    @PrimaryGeneratedColumn()
    id: number;

    @IsNumber()
    @Column({ type: "integer", })
    peso: number;

    @IsNumber()
    @Column({ type: "integer", })
    serie: number;

    @IsNumber()
    @Column({ type: "integer", })
    repeticao: number;


    @IsNumber()
    @Column({ type: "integer", })
    descanco: number;

    @IsString()
    @Column({ type: "varchar", length: 15 , default: null})
    observacao: string;

    @ManyToOne(() => Workout, (workout) => workout.id)
    workout: Workout

    @ManyToOne(() => Exercice, (exercice) => exercice.id)
    exercice: Exercice



}