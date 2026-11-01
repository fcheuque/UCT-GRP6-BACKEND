"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const videogames_module_1 = require("./videogames/videogames.module");
const logs_module_1 = require("./logs/logs.module");
const employees_module_1 = require("./employees/employees.module");
const stations_module_1 = require("./stations/stations.module");
const seeder_module_1 = require("./database/seeders/seeder.module");
const videogame_entity_1 = require("./videogames/entities/videogame.entity");
const log_entity_1 = require("./logs/entities/log.entity");
const employee_entity_1 = require("./employees/entities/employee.entity");
const station_entity_1 = require("./stations/entities/station.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [videogame_entity_1.Videogame, log_entity_1.Log, employee_entity_1.Employee, station_entity_1.Station],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([videogame_entity_1.Videogame, log_entity_1.Log, employee_entity_1.Employee, station_entity_1.Station]),
            videogames_module_1.VideogamesModule,
            logs_module_1.LogsModule,
            employees_module_1.EmployeesModule,
            stations_module_1.StationsModule,
            seeder_module_1.SeederModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map