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
        console.log('Ejecutando verificacion de Seeders obligatorios...');
        const employeeCount = await this.employeeRepo.count();
        if (employeeCount === 0) {
            await this.employeeRepo.save([
                {
                    name: 'Andres Vera',
                    rut: '18445332-1',
                    role: 'Administrador General',
                    email: 'avera@uct.cl',
                },
                {
                    name: 'Claudia Soto',
                    rut: '19321554-K',
                    role: 'Supervisor Tecnico',
                    email: 'csoto@uct.cl',
                },
            ]);
            console.log('Seeders: 2 Encargados insertados con exito.');
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
                    name: 'Arcade Maquina Alfa',
                    type: 'Retro Cabinet',
                    isAvailable: false,
                    location: 'Zona Clasicos',
                },
            ]);
            console.log('Seeders: 2 Estaciones fisicas insertadas con exito.');
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
            console.log('Seeders: 2 Videojuegos cargados en el catalogo.');
            await this.logRepo.save([
                this.logRepo.create({
                    observation: 'Lanzamiento inicial en la plataforma fisica sin novedades.',
                    actionType: 'Alta de Juego',
                    videogame: savedGame1,
                }),
                this.logRepo.create({
                    observation: 'El sector de memoria del chip grafico arroja artifacts y saltos de texturas.',
                    actionType: 'Reporte de Corrupcion',
                    videogame: savedGame2,
                }),
            ]);
            console.log('Seeders: Historial de bitacoras vinculadas insertado con exito.');
        }
        console.log('Base de datos inicializada de forma reproducible para la defensa.');
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