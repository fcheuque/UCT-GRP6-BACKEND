import { LogService } from './log.service';
import { CreateLogDto } from './dtos/create-log.dto';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    create(dto: CreateLogDto): Promise<import("./entities/log.entity").Log>;
    findAll(): Promise<import("./entities/log.entity").Log[]>;
}
