import { LogsService } from './logs.service';
import { CreateLogDto } from './dtos/create-log.dto';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(dto: CreateLogDto): Promise<import("./entities/log.entity").Log>;
    findAll(): Promise<import("./entities/log.entity").Log[]>;
}
