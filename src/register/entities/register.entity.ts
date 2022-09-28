import { IsDate, IsNumber, IsString } from "class-validator";
import { RegisterWorkout } from "src/register_workout/entities/register_workout.entity";
import { Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany, 
} from "typeorm";
import {Client} from '../../client/entitities/client.entity'

@Entity()
export class Register {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNumber()
    @Column({ type: "decimal"})
      client_ID: number;

    @IsNumber()
    @Column({ type: "decimal"})
      price: number;

    @IsDate()
    @Column({ type: "date"})
      valid: Date | String;

    @OneToOne( ()=> Client)
    @JoinColumn({ name: "client_ID" })
        client : Client;

    @OneToMany(() => RegisterWorkout, (register_workout) => register_workout.id)
   register_workout: RegisterWorkout[]

}

