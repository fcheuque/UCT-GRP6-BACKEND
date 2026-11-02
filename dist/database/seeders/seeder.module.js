"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_seeder_1 = require("./database.seeder");
const videogame_entity_1 = require("../../videogames/entities/videogame.entity");
const log_entity_1 = require("../../logs/entities/log.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const station_entity_1 = require("../../stations/entities/station.entity");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([videogame_entity_1.Videogame, log_entity_1.Log, employee_entity_1.Employee, station_entity_1.Station]),
        ],
        providers: [database_seeder_1.DatabaseSeeder],
        exports: [database_seeder_1.DatabaseSeeder],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map