import { PartialType } from '@nestjs/swagger';
import { CreateVideogameDto } from './create-videogame.dto';

export class UpdateVideogameDto extends PartialType(CreateVideogameDto) {}
