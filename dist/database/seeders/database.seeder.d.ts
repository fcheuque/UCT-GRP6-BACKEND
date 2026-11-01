import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Videogame } from '../../videogames/entities/videogame.entity';
import { Log } from '../../logs/entities/log.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { Station } from '../../stations/entities/station.entity';
export declare class DatabaseSeeder implements OnModuleInit {
    private readonly gameRepo;
    private readonly logRepo;
    private readonly employeeRepo;
    private readonly stationRepo;
    constructor(gameRepo: Repository<Videogame>, logRepo: Repository<Log>, employeeRepo: Repository<Employee>, stationRepo: Repository<Station>);
    onModuleInit(): Promise<void>;
}
