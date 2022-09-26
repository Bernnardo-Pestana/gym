import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {EmployeeModule} from './employee/employee.module'

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

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
