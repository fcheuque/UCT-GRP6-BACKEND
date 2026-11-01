import { Log } from '../../logs/entities/log.entity';
export declare enum GameStatus {
    ACTIVO = "ACTIVO",
    CORRUPTO = "CORRUPTO",
    DADO_DE_BAJA = "DADO_DE_BAJA"
}
export declare class Videogame {
    id: string;
    title: string;
    platform: string;
    status: GameStatus;
    genre: string;
    logs: Log[];
}
