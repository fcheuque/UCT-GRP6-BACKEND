import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Proveedor del seeder
import { DatabaseSeeder } from './database.seeder';

// Entidades que el seeder necesita inyectar para operar
import { Videogame } from '../../videogames/entities/videogame.entity';
import { Log } from '../../logs/entities/log.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Station } from '../../stations/entities/station.entity';

@Module({
  imports: [
    // El seeder requiere acceso directo a los repositorios ORM para poblar las tablas
    TypeOrmModule.forFeature([Videogame, Log, Employee, Station]),
  ],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder], // Se exporta para que pueda ser consumido o inicializado externamente
})
export class SeederModule {}
