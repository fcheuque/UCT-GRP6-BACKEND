import { VideogamesRepository } from './videogames.repository';
import { Videogame, GameStatus } from './entities/videogame.entity';
import { CreateVideogameDto } from './dtos/create-videogame.dto';
import { UpdateVideogameDto } from './dtos/update-videogame.dto';
export declare class VideogamesService {
    private readonly videogameRepository;
    constructor(videogameRepository: VideogamesRepository);
    create(dto: CreateVideogameDto): Promise<Videogame>;
    findAll(status?: GameStatus, ordenarPor?: string, direccion?: 'asc' | 'desc', pagina?: number, limite?: number): Promise<{
        items: Videogame[];
        total: number;
        pagina: number;
        limite: number;
        total_paginas: number;
    }>;
    findOne(id: string): Promise<Videogame>;
    update(id: string, dto: UpdateVideogameDto): Promise<Videogame>;
    remove(id: string): Promise<void>;
}
