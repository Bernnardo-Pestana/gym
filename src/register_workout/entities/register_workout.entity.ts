import { IsDate, IsNumber, IsString } from "class-validator";
import { Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne, 
} from "typeorm";
import {Register} from '../../register/entities/register.entity'
import { Workout } from '../../workout/entities/workout.entity'

@Entity()
export class RegisterWorkout {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Workout, (workout) => workout.id)
    workout: Workout

    @ManyToOne(() => Register, (register) => register.id)
    register: Register


}





