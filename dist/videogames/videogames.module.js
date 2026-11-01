"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const videogames_controller_1 = require("./videogames.controller");
const videogames_service_1 = require("./videogames.service");
const videogames_repository_1 = require("./videogames.repository");
const videogame_entity_1 = require("./entities/videogame.entity");
let VideogamesModule = class VideogamesModule {
};
exports.VideogamesModule = VideogamesModule;
exports.VideogamesModule = VideogamesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([videogame_entity_1.Videogame])],
        controllers: [videogames_controller_1.VideogamesController],
        providers: [videogames_service_1.VideogamesService, videogames_repository_1.VideogamesRepository],
        exports: [videogames_service_1.VideogamesService, videogames_repository_1.VideogamesRepository, typeorm_1.TypeOrmModule],
    })
], VideogamesModule);
//# sourceMappingURL=videogames.module.js.map