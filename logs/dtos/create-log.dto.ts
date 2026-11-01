import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsUUID } from 'class-validator';

export class CreateLogDto {
  @ApiProperty({ example: 'Pantalla azul al cargar el mapa' })
  @IsString()
  @Length(5, 500)
  observation: string;

  @ApiProperty({ example: 'Reporte de Corrupción' })
  @IsString()
  actionType: string;

  @ApiProperty({ example: 'UUID-DE-UN-VIDEOJUEGO' })
  @IsUUID() // Validación de Existencia / Formato Relacionado
  videogameId: string;
}
