import { Classes } from 'src/class/entities/class.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class ClassesEmployees{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Employee, (employee) => employee.id)
    user: Employee

    @ManyToOne(() => Classes, (classes) => classes.id)
    class: Classes


    
}