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
exports.CreateEmployeeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmployeeDto {
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sebastián Muñoz' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 80),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678-K' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[0-9]{7,8}-[0-9Kk]$/, { message: 'El RUT debe tener formato valido con guion' }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "rut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Supervisor de Turno' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'smunoz@uct.cl' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Debe ingresar un correo institucional valido' }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
//# sourceMappingURL=create-employee.dto.js.map