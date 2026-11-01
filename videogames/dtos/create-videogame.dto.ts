import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEnum } from 'class-validator';
import { GameStatus } from '../entities/videogame.entity';

export class CreateVideogameDto {
  @ApiProperty({ example: 'Grand Theft Auto V' })
  @IsString()
  @Length(3, 100) 
  title: string;

  @ApiProperty({ example: 'PS5' })
  @IsString()
  @Length(2, 20)
  platform: string;

  @ApiProperty({ enum: GameStatus, example: GameStatus.ACTIVO })
  @IsEnum(GameStatus)
  status: GameStatus;

  @ApiProperty({ example: 'Acción' })
  @IsString()
  genre: string;
}