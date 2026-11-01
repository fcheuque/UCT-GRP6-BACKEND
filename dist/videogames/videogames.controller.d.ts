import { VideogamesService } from './videogames.service';
import { CreateVideogameDto } from './dtos/create-videogame.dto';
import { UpdateVideogameDto } from './dtos/update-videogame.dto';
import { QueryVideogameDto } from './dtos/query-videogame.dto';
export declare class VideogamesController {
    private readonly videogamesService;
    constructor(videogamesService: VideogamesService);
    create(dto: CreateVideogameDto): Promise<import("./entities/videogame.entity").Videogame>;
    findAll(query: QueryVideogameDto): Promise<{
        items: import("./entities/videogame.entity").Videogame[];
        total: number;
        pagina: number;
        limite: number;
        total_paginas: number;
    }>;
    findOne(id: string): Promise<import("./entities/videogame.entity").Videogame>;
    update(id: string, dto: UpdateVideogameDto): Promise<import("./entities/videogame.entity").Videogame>;
    remove(id: string): Promise<void>;
}
