import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import  {EmployeeModule } from './employee/employee.module'
import { ExerciceModule } from './exercice/exercice.module';
import { RegisterModule } from './register/register.module';
import { WorkoutModule } from './workout/workout.module';
import { RegisterWorkout } from './register_workout/entities/register_workout.entity';
import { ExerciceWorkout } from './exercice_workout/entities/exercice_workout.entity';
import { ClassClient } from './class_client/entities/class_client.entity';
import { Classes } from './class/entities/class.entity';


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
    ExerciceWorkout,
    RegisterWorkout,
    ClassClient,
    Classes,


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
