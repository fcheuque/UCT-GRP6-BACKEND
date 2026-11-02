import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseSeeder } from './database.seeder';
import { Videogame } from '../../videogames/entities/videogame.entity';
import { Log } from '../../logs/entities/log.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Station } from '../../stations/entities/station.entity';

@Module({
  imports: [
    // El seeder requiere acceso directo a los repositorios de las 4 entidades obligatorias (Punto 5.8)
    TypeOrmModule.forFeature([Videogame, Log, Employee, Station]),
  ],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder],
})
export class SeederModule {}
