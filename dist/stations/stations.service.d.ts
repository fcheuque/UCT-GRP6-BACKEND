import { Repository } from 'typeorm';
import { Station } from './entities/station.entity';
import { CreateStationDto } from './dtos/create-station.dto';
export declare class StationsService {
    private readonly stationRepository;
    constructor(stationRepository: Repository<Station>);
    create(dto: CreateStationDto): Promise<Station>;
    findAll(): Promise<Station[]>;
    findOne(id: string): Promise<Station>;
}
