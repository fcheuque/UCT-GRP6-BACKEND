import { LogsService } from './entities/logs.service';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(dto: any): any;
    findAll(): any;
}
