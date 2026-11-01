import { GameStatus } from '../entities/videogame.entity';
export declare class QueryVideogameDto {
    status?: GameStatus;
    ordenar_por?: string;
    direccion?: 'asc' | 'desc';
    pagina?: number;
    limite?: number;
}
