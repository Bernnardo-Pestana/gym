
import { ClassEmployeeModule } from './class_employee/class_employee.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module'
import { ExerciceModule } from './exercice/exercice.module';
import { RegisterModule } from './register/register.module';
import { WorkoutModule } from './workout/workout.module';

import { RegisterWorkoutModule } from './register_workout/register_workout.module';
import { ExerciceWorkoutModule } from './exercice_workout/exercice_workout.module';
import { ClassClientModule } from './class_client/class_client.module';
import { ClassesModule } from './class/class.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: `root`,
        password: `Txai1990`,
        database: `gym`,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      })
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ClientModule,
    EmployeeModule,
    RegisterModule,
    ExerciceModule,
    WorkoutModule,
    ClassesModule,
    ClassClientModule,
    ExerciceWorkoutModule,    
    RegisterWorkoutModule,
    ClassEmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
