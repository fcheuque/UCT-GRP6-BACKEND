import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';
import { CreateLogDto } from './dtos/create-log.dto';
import { VideogamesService } from '../videogames/videogames.service';
import { GameStatus } from '../videogames/entities/videogame.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
    private readonly videogamesService: VideogamesService,
  ) {}

  async create(dto: CreateLogDto): Promise<Log> {
    const game = await this.videogamesService.findOne(dto.videogameId);

    if (game.status === GameStatus.DADO_DE_BAJA && dto.actionType !== 'Revision Tecnica Especial') {
      throw new BadRequestException('Un videojuego DADO DE BAJA requiere una Revision Tecnica Especial.');
    }

    const log = this.logRepository.create({
      observation: dto.observation,
      actionType: dto.actionType,
      videogame: game
    });

    const savedLog = await this.logRepository.save(log);

    if (dto.actionType === 'Reporte de Corrupcion') {
      await this.videogamesService.update(game.id, { status: GameStatus.CORRUPTO });
    }

    return savedLog;
  }

  async findAll(): Promise<Log[]> {
    return await this.logRepository.find({ relations: ['videogame'] });
  }
}
