import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Videogame, GameStatus } from './entities/videogame.entity';

@Injectable()
export class VideogamesRepository {
  constructor(
    @InjectRepository(Videogame)
    private readonly ormRepository: Repository<Videogame>,
  ) {}

  async createAndSave(data: Partial<Videogame>): Promise<Videogame> {
    const game = this.ormRepository.create(data);
    return await this.ormRepository.save(game);
  }

  async findWithFilters(status?: GameStatus, ordenarPor?: string, direccion: 'ASC' | 'DESC' = 'ASC', skip: number = 0, take: number = 20) {
    const queryBuilder = this.ormRepository.createQueryBuilder('game');

    if (status) {
      queryBuilder.andWhere('game.status = :status', { status });
    }

    if (ordenarPor) {
      queryBuilder.orderBy(`game.${ordenarPor}`, direccion);
    }

    queryBuilder.skip(skip).take(take);
    return await queryBuilder.getManyAndCount();
  }

  async findById(id: string): Promise<Videogame | null> {
    return await this.ormRepository.findOne({ where: { id }, relations: ['logs'] });
  }

  async save(game: Videogame): Promise<Videogame> {
    return await this.ormRepository.save(game);
  }

  async delete(game: Videogame): Promise<void> {
    await this.ormRepository.remove(game);
  }

  async count(): Promise<number> {
    return await this.ormRepository.count();
  }
}
