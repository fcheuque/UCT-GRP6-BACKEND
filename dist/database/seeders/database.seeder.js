"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const videogame_entity_1 = require("../../videogames/entities/videogame.entity");
const log_entity_1 = require("../../logs/entities/log.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const station_entity_1 = require("../../stations/entities/station.entity");
let DatabaseSeeder = class DatabaseSeeder {
    constructor(gameRepo, logRepo, employeeRepo, stationRepo) {
        this.gameRepo = gameRepo;
        this.logRepo = logRepo;
        this.employeeRepo = employeeRepo;
        this.stationRepo = stationRepo;
    }
    async onModuleInit() {
        console.log('🔄 Verificando estado del almacenamiento para carga de Seeders obligatorios...');
        const employeeCount = await this.employeeRepo.count();
        let savedEmployee1;
        let savedEmployee2;
        if (employeeCount === 0) {
            const emp1 = this.employeeRepo.create({
                name: 'Andrés Vera',
                rut: '18445332-1',
                role: 'Administrador General',
                email: 'avera@uct.cl',
            });
            const emp2 = this.employeeRepo.create({
                name: 'Claudia Soto',
                rut: '19321554-K',
                role: 'Supervisor Técnico',
                email: 'csoto@uct.cl',
            });
            savedEmployee1 = await this.employeeRepo.save(emp1);
            savedEmployee2 = await this.employeeRepo.save(emp2);
            console.log('🌱 Seeders: 2 Encargados insertados.');
        }
        else {
            const emps = await this.employeeRepo.find();
            savedEmployee1 = emps[0];
            savedEmployee2 = emps[1] || emps[0];
        }
        const stationCount = await this.stationRepo.count();
        if (stationCount === 0) {
            await this.stationRepo.save([
                {
                    name: 'Mesa Virtual 01',
                    type: 'PS5 Pro Cabin',
                    isAvailable: true,
                    location: 'Sector Central',
                },
                {
                    name: 'Arcade Máquina Alfa',
                    type: 'Retro Cabinet',
                    isAvailable: false,
                    location: 'Zona Clásicos',
                },
            ]);
            console.log('🌱 Seeders: 2 Estaciones físicas insertadas.');
        }
        const gameCount = await this.gameRepo.count();
        if (gameCount === 0) {
            const game1 = this.gameRepo.create({
                title: 'Pac-Man Classic Collection',
                platform: 'Retro Cabinet',
                status: videogame_entity_1.GameStatus.ACTIVO,
                genre: 'Arcade / Retro',
            });
            const game2 = this.gameRepo.create({
                title: 'Mortal Kombat II Deluxe',
                platform: 'Retro Cabinet',
                status: videogame_entity_1.GameStatus.CORRUPTO,
                genre: 'Lucha / Peleas',
            });
            const savedGame1 = await this.gameRepo.save(game1);
            const savedGame2 = await this.gameRepo.save(game2);
            console.log('🌱 Seeders: 2 Videojuegos cargados en el catálogo.');
            await this.logRepo.save([
                this.logRepo.create({
                    observation: 'Lanzamiento inicial en la plataforma física sin novedades.',
                    actionType: 'Alta de Juego',
                    videogame: savedGame1,
                }),
                this.logRepo.create({
                    observation: 'El sector de memoria del chip gráfico arroja artifacts y saltos de texturas.',
                    actionType: 'Reporte de Corrupción',
                    videogame: savedGame2,
                }),
            ]);
            console.log('🌱 Seeders: Bitácoras asociadas insertadas con éxito.');
        }
        console.log('✅ Base de datos inicializada de forma reproducible.');
    }
};
exports.DatabaseSeeder = DatabaseSeeder;
exports.DatabaseSeeder = DatabaseSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(videogame_entity_1.Videogame)),
    __param(1, (0, typeorm_1.InjectRepository)(log_entity_1.Log)),
    __param(2, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(3, (0, typeorm_1.InjectRepository)(station_entity_1.Station)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DatabaseSeeder);
//# sourceMappingURL=database.seeder.js.map