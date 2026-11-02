import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideogamesModule } from './videogames/videogames.module';
import { LogModule } from './logs/log.module';
import { EmployeesModule } from './employees/employees.module';
import { StationsModule } from './stations/stations.module';
import { SeederModule } from './database/seeders/seeder.module';

import { Videogame } from './videogames/entities/videogame.entity';
import { Log } from './logs/entities/log.entity';
import { Employee } from './employees/entities/employee.entity';
import { Station } from './stations/entities/station.entity';

@Module({
  imports: [
    // Configuracion de persistencia real relacional exigida en el Punto 5.8
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Videogame, Log, Employee, Station],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Videogame, Log, Employee, Station]),
    VideogamesModule,
    LogModule,
    EmployeesModule,
    StationsModule,
    SeederModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
