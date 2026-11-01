import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { GameStatus } from '../entities/videogame.entity';

export class QueryVideogameDto {
  @ApiPropertyOptional({ enum: GameStatus, description: 'Filtrar por estado del videojuego' })
  @IsOptional()
  @IsEnum(GameStatus)
  status?: GameStatus;

  @ApiPropertyOptional({ description: 'Atributo por el cual ordenar (ej: title, platform)' })
  @IsOptional()
  @IsString()
  ordenar_por?: string;

  @ApiPropertyOptional({ description: 'Dirección del ordenamiento', enum: ['asc', 'desc'], default: 'asc' })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.toLowerCase())
  direccion?: 'asc' | 'desc' = 'asc';

  @ApiPropertyOptional({ description: 'Número de página (comienza en 1)', default: 1 })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @Min(1)
  pagina?: number = 1;

  @ApiPropertyOptional({ description: 'Cantidad de elementos por página (1-100)', default: 20 })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @Min(1)
  @Max(100)
  limite?: number = 20;
}
