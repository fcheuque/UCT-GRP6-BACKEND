import { Videogame } from '../../videogames/entities/videogame.entity';
export declare class Log {
    id: string;
    reportedAt: Date;
    observation: string;
    actionType: string;
    videogame: Videogame;
}
