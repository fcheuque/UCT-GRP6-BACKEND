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
exports.VideogamesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const videogame_entity_1 = require("./entities/videogame.entity");
let VideogamesRepository = class VideogamesRepository {
    constructor(ormRepository) {
        this.ormRepository = ormRepository;
    }
    async createAndSave(data) {
        const game = this.ormRepository.create(data);
        return await this.ormRepository.save(game);
    }
    async findWithFilters(status, ordenarPor, direccion = 'ASC', skip = 0, take = 20) {
        const queryBuilder = this.ormRepository.createQueryBuilder('game');
        if (status) {
            queryBuilder.andWhere('game.status = :status', { status });
        }
        if (ordenarPor) {
            queryBuilder.orderBy(`game.${ordenarPor}`, direccion);
        }
        queryBuilder.skip(skip).take(take);
        return await queryBuilder.getManyAndCount();
    }
    async findById(id) {
        return await this.ormRepository.findOne({ where: { id }, relations: ['logs'] });
    }
    async save(game) {
        return await this.ormRepository.save(game);
    }
    async delete(game) {
        await this.ormRepository.remove(game);
    }
    async count() {
        return await this.ormRepository.count();
    }
};
exports.VideogamesRepository = VideogamesRepository;
exports.VideogamesRepository = VideogamesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(videogame_entity_1.Videogame)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VideogamesRepository);
//# sourceMappingURL=videogames.repository.js.map