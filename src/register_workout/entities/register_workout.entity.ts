import { IsDate, IsNumber, IsString } from "class-validator";
import { Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne, 
} from "typeorm";
import {Client} from '../../client/entities/client.entity'
import { Workout } from '../../workout/entities/workout.entity'

@Entity()
export class RegisterWorkout {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Workout, (workout) => workout.id)
    workout: Workout

    @ManyToOne(() => Client, (client) => client.id)
    register: Client


}





