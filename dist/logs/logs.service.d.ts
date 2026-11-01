import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';
import { VideogamesService } from '../videogames/videogames.service';
export declare class LogsService {
    private readonly logRepository;
    private readonly videogamesService;
    constructor(logRepository: Repository<Log>, videogamesService: VideogamesService);
    create(dto: any): Promise<Log>;
    findAll(): Promise<Log[]>;
}
