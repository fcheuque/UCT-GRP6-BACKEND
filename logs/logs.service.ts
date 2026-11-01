import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';
import { CreateLogDto } from './dtos/create-log.dto';
import { VideogamesService } from '../videogames/videogames.service';
import { GameStatus } from '../videogames/entities/videogame.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
    private readonly videogamesService: VideogamesService, // Inyección entre módulos
  ) {}

  async create(dto: CreateLogDto): Promise<Log> {
    // 1. Verificación de existencia relacionada (Punto 5.3)
    const game = await this.videogamesService.findOne(dto.videogameId);

    // 2. REGLA DE NEGOCIO (Punto 5.1): Si el juego ya está DADO_DE_BAJA, no se le pueden imputar bitácoras de mantención corrientes
    if (game.status === GameStatus.DADO_DE_BAJA && dto.actionType !== 'Revisión Técnica Especial') {
      throw new BadRequestException('Un videojuego DADO DE BAJA requiere una Revisión Técnica Especial antes de ingresar otro registro.');
    }

    const log = this.logRepository.create({
      observation: dto.observation,
      actionType: dto.actionType,
      videogame: game
    });

    const savedLog = await this.logRepository.save(log);

    // REGLA DE NEGOCIO AUTOMÁTICA: Si se reporta corrupción, cambiar el estado del videojuego
    if (dto.actionType === 'Reporte de Corrupción') {
      await this.videogamesService.update(game.id, { status: GameStatus.CORRUPTO });
    }

    return savedLog;
  }

  async findAll(): Promise<Log[]> {
    return await this.logRepository.find({ relations: ['videogame'] });
  }
}
