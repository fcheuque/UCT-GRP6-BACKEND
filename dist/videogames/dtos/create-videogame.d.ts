import { GameStatus } from '../entities/videogame.entity';
export declare class CreateVideogameDto {
    title: string;
    platform: string;
    status: GameStatus;
    genre: string;
}
