import { Repository } from 'typeorm';
import { Videogame, GameStatus } from './entities/videogame.entity';
export declare class VideogamesRepository {
    private readonly ormRepository;
    constructor(ormRepository: Repository<Videogame>);
    createAndSave(data: Partial<Videogame>): Promise<Videogame>;
    findWithFilters(status?: GameStatus, ordenarPor?: string, direccion?: 'ASC' | 'DESC', skip?: number, take?: number): Promise<[Videogame[], number]>;
    findById(id: string): Promise<Videogame | null>;
    save(game: Videogame): Promise<Videogame>;
    delete(game: Videogame): Promise<void>;
    count(): Promise<number>;
}
