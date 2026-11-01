import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsBoolean } from 'class-validator';

export class CreateStationDto {
  @ApiProperty({ example: 'Mesa Virtual 01' })
  @IsString()
  @Length(3, 50)
  name: string;

  @ApiProperty({ example: 'PS5 Pro Cabin' })
  @IsString()
  type: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;

  @ApiProperty({ example: 'Sector Central' })
  @IsString()
  location: string;
}
