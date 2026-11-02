import { Repository } from 'typeorm';
import { Log } from './entities/log.entity';
import { CreateLogDto } from './dtos/create-log.dto';
import { VideogamesService } from '../videogames/videogames.service';
export declare class LogService {
    private readonly logRepository;
    private readonly videogamesService;
    constructor(logRepository: Repository<Log>, videogamesService: VideogamesService);
    create(dto: CreateLogDto): Promise<Log>;
    findAll(): Promise<Log[]>;
}
