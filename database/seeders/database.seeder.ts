import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Videogame, GameStatus } from '../../videogames/entities/videogame.entity';
import { Log } from '../../logs/entities/log.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Station } from '../../stations/entities/station.entity';

@Injectable()
export class DatabaseSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Videogame)
    private readonly gameRepo: Repository<Videogame>,
    @InjectRepository(Log)
    private readonly logRepo: Repository<Log>,
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
    @InjectRepository(Station)
    private readonly stationRepo: Repository<Station>,
  ) {}

  async onModuleInit() {
    console.log('Ejecutando verificacion de Seeders obligatorios...');

    const employeeCount = await this.employeeRepo.count();
    if (employeeCount === 0) {
      await this.employeeRepo.save([
        {
          name: 'Andres Vera',
          rut: '18445332-1',
          role: 'Administrador General',
          email: 'avera@uct.cl',
        },
        {
          name: 'Claudia Soto',
          rut: '19321554-K',
          role: 'Supervisor Tecnico',
          email: 'csoto@uct.cl',
        },
      ]);
      console.log('Seeders: 2 Encargados insertados con exito.');
    }

    const stationCount = await this.stationRepo.count();
    if (stationCount === 0) {
      await this.stationRepo.save([
        {
          name: 'Mesa Virtual 01',
          type: 'PS5 Pro Cabin',
          isAvailable: true,
          location: 'Sector Central',
        },
        {
          name: 'Arcade Maquina Alfa',
          type: 'Retro Cabinet',
          isAvailable: false,
          location: 'Zona Clasicos',
        },
      ]);
      console.log('Seeders: 2 Estaciones fisicas insertadas con exito.');
    }

    const gameCount = await this.gameRepo.count();
    if (gameCount === 0) {
      const game1 = this.gameRepo.create({
        title: 'Pac-Man Classic Collection',
        platform: 'Retro Cabinet',
        status: GameStatus.ACTIVO,
        genre: 'Arcade / Retro',
      });

      const game2 = this.gameRepo.create({
        title: 'Mortal Kombat II Deluxe',
        platform: 'Retro Cabinet',
        status: GameStatus.CORRUPTO,
        genre: 'Lucha / Peleas',
      });

      const savedGame1 = await this.gameRepo.save(game1);
      const savedGame2 = await this.gameRepo.save(game2);
      console.log('Seeders: 2 Videojuegos cargados en el catalogo.');

      await this.logRepo.save([
        this.logRepo.create({
          observation: 'Lanzamiento inicial en la plataforma fisica sin novedades.',
          actionType: 'Alta de Juego',
          videogame: savedGame1,
        }),
        this.logRepo.create({
          observation: 'El sector de memoria del chip grafico arroja artifacts y saltos de texturas.',
          actionType: 'Reporte de Corrupcion',
          videogame: savedGame2,
        }),
      ]);
      console.log('Seeders: Historial de bitacoras vinculadas insertado con exito.');
    }

    console.log('Base de datos inicializada de forma reproducible para la defensa.');
  }
}
