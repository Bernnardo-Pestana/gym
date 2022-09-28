import { Exercice } from "../../exercice/entities/exercice.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Workout } from "../../workout/entities/workout.entity";

@Entity()
export class ExerciceWorkout
{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Workout, (workout) => workout.id)
    workout: Workout

    @ManyToOne(() => Exercice, (exercice) => exercice.id)
    exercice: Exercice

}