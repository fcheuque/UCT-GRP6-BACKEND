"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideogameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_videogame_dto_1 = require("./create-videogame.dto");
class UpdateVideogameDto extends (0, swagger_1.PartialType)(create_videogame_dto_1.CreateVideogameDto) {
}
exports.UpdateVideogameDto = UpdateVideogameDto;
//# sourceMappingURL=update-videogame.dto.js.map