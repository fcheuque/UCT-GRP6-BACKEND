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
exports.LogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const log_entity_1 = require("./entities/log.entity");
const videogames_service_1 = require("../videogames/videogames.service");
const videogame_entity_1 = require("../videogames/entities/videogame.entity");
let LogsService = class LogsService {
    constructor(logRepository, videogamesService) {
        this.logRepository = logRepository;
        this.videogamesService = videogamesService;
    }
    async create(dto) {
        const game = await this.videogamesService.findOne(dto.videogameId);
        if (game.status === videogame_entity_1.GameStatus.DADO_DE_BAJA && dto.actionType !== 'Revisión Técnica Especial') {
            throw new common_1.BadRequestException('Un videojuego DADO DE BAJA requiere una Revisión Técnica Especial antes de ingresar otro registro.');
        }
        const log = this.logRepository.create({
            observation: dto.observation,
            actionType: dto.actionType,
            videogame: game
        });
        const savedLog = await this.logRepository.save(log);
        if (dto.actionType === 'Reporte de Corrupción') {
            await this.videogamesService.update(game.id, { status: videogame_entity_1.GameStatus.CORRUPTO });
        }
        return savedLog;
    }
    async findAll() {
        return await this.logRepository.find({ relations: ['videogame'] });
    }
};
exports.LogsService = LogsService;
exports.LogsService = LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(log_entity_1.Log)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        videogames_service_1.VideogamesService])
], LogsService);
//# sourceMappingURL=logs.service.js.map