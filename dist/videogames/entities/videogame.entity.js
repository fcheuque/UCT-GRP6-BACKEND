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
exports.Videogame = exports.GameStatus = void 0;
const typeorm_1 = require("typeorm");
const log_entity_1 = require("../../logs/entities/log.entity");
var GameStatus;
(function (GameStatus) {
    GameStatus["ACTIVO"] = "ACTIVO";
    GameStatus["CORRUPTO"] = "CORRUPTO";
    GameStatus["DADO_DE_BAJA"] = "DADO_DE_BAJA";
})(GameStatus || (exports.GameStatus = GameStatus = {}));
let Videogame = class Videogame {
};
exports.Videogame = Videogame;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Videogame.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Videogame.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Videogame.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: GameStatus.ACTIVO }),
    __metadata("design:type", String)
], Videogame.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Videogame.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => log_entity_1.Log, (log) => log.videogame),
    __metadata("design:type", Array)
], Videogame.prototype, "logs", void 0);
exports.Videogame = Videogame = __decorate([
    (0, typeorm_1.Entity)('videogames')
], Videogame);
//# sourceMappingURL=videogame.entity.js.map