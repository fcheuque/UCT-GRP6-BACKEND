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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesService = void 0;
const common_1 = require("@nestjs/common");
const videogames_repository_1 = require("./videogames.repository");
let VideogamesService = class VideogamesService {
    constructor(videogameRepository) {
        this.videogameRepository = videogameRepository;
    }
    async create(dto) {
        return await this.videogameRepository.createAndSave(dto);
    }
    async findAll(status, ordenarPor, direccion = 'asc', pagina = 1, limite = 20) {
        const skip = (pagina - 1) * limite;
        const dirUpper = direccion.toUpperCase();
        const [items, total] = await this.videogameRepository.findWithFilters(status, ordenarPor, dirUpper, skip, limite);
        const totalPaginas = Math.ceil(total / limite);
        return {
            items,
            total,
            pagina,
            limite,
            total_paginas: totalPaginas
        };
    }
    async findOne(id) {
        const game = await this.videogameRepository.findById(id);
        if (!game) {
            throw new common_1.NotFoundException('No existe un videojuego con el ID solicitado');
        }
        return game;
    }
    async update(id, dto) {
        const game = await this.findOne(id);
        Object.assign(game, dto);
        return await this.videogameRepository.save(game);
    }
    async remove(id) {
        const game = await this.findOne(id);
        await this.videogameRepository.delete(game);
    }
};
exports.VideogamesService = VideogamesService;
exports.VideogamesService = VideogamesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [videogames_repository_1.VideogamesRepository])
], VideogamesService);
//# sourceMappingURL=videogames.service.js.map