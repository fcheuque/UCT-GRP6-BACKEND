import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { VideogamesRepository } from './videogames.repository';
import { Videogame, GameStatus } from './entities/videogame.entity';
import { CreateVideogameDto } from './dtos/create-videogame.dto';
import { UpdateVideogameDto } from './dtos/update-videogame.dto';

@Injectable()
export class VideogamesService {
  constructor(
    private readonly videogameRepository: VideogamesRepository,
  ) {}

  async create(dto: CreateVideogameDto): Promise<Videogame> {
    return await this.videogameRepository.createAndSave(dto);
  }

  async findAll(status?: GameStatus, ordenarPor?: string, direccion: 'asc' | 'desc' = 'asc', pagina: number = 1, limite: number = 20) {
    const skip = (pagina - 1) * limite;
    const dirUpper = direccion.toUpperCase() as 'ASC' | 'DESC';

    const [items, total] = await this.videogameRepository.findWithFilters(
      status,
      ordenarPor,
      dirUpper,
      skip,
      limite
    );

    const totalPaginas = Math.ceil(total / limite);

    return {
      items,
      total,
      pagina,
      limite,
      total_paginas: totalPaginas
    };
  }

  async findOne(id: string): Promise<Videogame> {
    const game = await this.videogameRepository.findById(id);
    if (!game) {
      throw new NotFoundException('No existe un videojuego con el ID solicitado');
    }
    return game;
  }

  async update(id: string, dto: UpdateVideogameDto): Promise<Videogame> {
    const game = await this.findOne(id);
    Object.assign(game, dto);
    return await this.videogameRepository.save(game);
  }

  async remove(id: string): Promise<void> {
    const game = await this.findOne(id);
    await this.videogameRepository.delete(game);
  }
}
