import { LogsService } from './logs.service';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(dto: any): Promise<Log>;
    findAll(): Promise<Log[]>;
}
