import { IsDate, IsNumber, IsString } from "class-validator";
import { Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn, 
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

}

