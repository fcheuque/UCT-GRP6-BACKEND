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
exports.VideogamesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const videogames_service_1 = require("./videogames.service");
const create_videogame_dto_1 = require("./dtos/create-videogame.dto");
const update_videogame_dto_1 = require("./dtos/update-videogame.dto");
const query_videogame_dto_1 = require("./dtos/query-videogame.dto");
let VideogamesController = class VideogamesController {
    constructor(videogamesService) {
        this.videogamesService = videogamesService;
    }
    create(dto) {
        return this.videogamesService.create(dto);
    }
    findAll(query) {
        return this.videogamesService.findAll(query.status, query.ordenar_por, query.direccion, query.pagina, query.limite);
    }
    findOne(id) {
        return this.videogamesService.findOne(id);
    }
    update(id, dto) {
        return this.videogamesService.update(id, dto);
    }
    remove(id) {
        return this.videogamesService.remove(id);
    }
};
exports.VideogamesController = VideogamesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo videojuego' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Recurso creado correctamente.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Los datos no cumplen el esquema o las validaciones.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_videogame_dto_1.CreateVideogameDto]),
    __metadata("design:returntype", void 0)
], VideogamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar colecciones con filtros, orden y paginación (Orden obligatorio: Filtrar -> Ordenar -> Paginar)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta realizada correctamente con metadatos de paginación.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_videogame_dto_1.QueryVideogameDto]),
    __metadata("design:returntype", void 0)
], VideogamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un videojuego específico por su ID único' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Recurso encontrado con su historial de bitácoras.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'El recurso solicitado no existe.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideogamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar atributos de un videojuego por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualización realizada con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'El recurso solicitado no existe.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_videogame_dto_1.UpdateVideogameDto]),
    __metadata("design:returntype", void 0)
], VideogamesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar físicamente un videojuego del catálogo por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminación correcta cuando se devuelve contenido.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'El recurso solicitado no existe.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideogamesController.prototype, "remove", null);
exports.VideogamesController = VideogamesController = __decorate([
    (0, swagger_1.ApiTags)('Videojuegos'),
    (0, common_1.Controller)('videogames'),
    __metadata("design:paramtypes", [videogames_service_1.VideogamesService])
], VideogamesController);
//# sourceMappingURL=videogames.controller.js.map