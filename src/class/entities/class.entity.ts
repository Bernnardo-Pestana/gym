import {  IsDate, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class Classes {
    @PrimaryGeneratedColumn()
        id: number;

    @IsString()
    @Column({ type: "varchar", length: 100 })
     nome: string;

    @Column({ type: 'datetime' })
     time: Date | string;

    @IsDate()
    @Column({ type: 'date' })
     data: Date;

    @ManyToOne(() => Employee, (employee) => employee.id)
    employee: Employee
     

}