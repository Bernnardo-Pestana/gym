import {  IsString } from 'class-validator';
import { Classes } from '../../class/entities/class.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Client } from 'src/client/entities/client.entity';

export class ClassClient{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Client, (client) => client.id)
    user: Client

    @ManyToOne(() => Classes, (classes) => classes.id)
    class: Classes
}