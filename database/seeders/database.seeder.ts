import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entidades necesarias para poblar datos coherentes
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
    console.log('🔄 Verificando estado del almacenamiento para carga de Seeders obligatorios...');

    // 1. CARGA INICIAL: ENCARGADOS (EMPLOYEES) - Mínimo 2 con formatos válidos
    const employeeCount = await this.employeeRepo.count();
    let savedEmployee1: Employee;
    let savedEmployee2: Employee;

    if (employeeCount === 0) {
      const emp1 = this.employeeRepo.create({
        name: 'Andrés Vera',
        rut: '18445332-1',
        role: 'Administrador General',
        email: 'avera@uct.cl',
      });
      const emp2 = this.employeeRepo.create({
        name: 'Claudia Soto',
        rut: '19321554-K',
        role: 'Supervisor Técnico',
        email: 'csoto@uct.cl',
      });

      savedEmployee1 = await this.employeeRepo.save(emp1);
      savedEmployee2 = await this.employeeRepo.save(emp2);
      console.log('🌱 Seeders: 2 Encargados insertados.');
    } else {
      const emps = await this.employeeRepo.find();
      savedEmployee1 = emps[0];
      savedEmployee2 = emps[1] || emps[0];
    }

    // 2. CARGA INICIAL: ESTACIONES DE JUEGO (STATIONS) - Mínimo 2
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
          name: 'Arcade Máquina Alfa',
          type: 'Retro Cabinet',
          isAvailable: false,
          location: 'Zona Clásicos',
        },
      ]);
      console.log('🌱 Seeders: 2 Estaciones físicas insertadas.');
    }

    // 3. CARGA INICIAL: VIDEOJUEGOS (VIDEOGAMES) Y PLANILLAS (LOGS)
    // El punto 5.8 exige demostrar una relación uno-a-muchos persistente y coherente
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
      console.log('🌱 Seeders: 2 Videojuegos cargados en el catálogo.');

      // 4. CARGA INICIAL: BITÁCORAS / PLANILLAS DIGITALES (LOGS)
      // Se asocian los registros a los videojuegos creados (Relación 1:N)
      await this.logRepo.save([
        this.logRepo.create({
          observation: 'Lanzamiento inicial en la plataforma física sin novedades.',
          actionType: 'Alta de Juego',
          videogame: savedGame1,
        }),
        this.logRepo.create({
          observation: 'El sector de memoria del chip gráfico arroja artifacts y saltos de texturas.',
          actionType: 'Reporte de Corrupción',
          videogame: savedGame2,
        }),
      ]);
      console.log('🌱 Seeders: Bitácoras asociadas insertadas con éxito.');
    }

    console.log('✅ Base de datos inicializada de forma reproducible.');
  }
}
