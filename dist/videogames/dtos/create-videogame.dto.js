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
exports.CreateVideogameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const videogame_entity_1 = require("../entities/videogame.entity");
class CreateVideogameDto {
}
exports.CreateVideogameDto = CreateVideogameDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Grand Theft Auto V' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], CreateVideogameDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PS5' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 20),
    __metadata("design:type", String)
], CreateVideogameDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: videogame_entity_1.GameStatus, example: videogame_entity_1.GameStatus.ACTIVO }),
    (0, class_validator_1.IsEnum)(videogame_entity_1.GameStatus),
    __metadata("design:type", String)
], CreateVideogameDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acción' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVideogameDto.prototype, "genre", void 0);
//# sourceMappingURL=create-videogame.dto.js.map