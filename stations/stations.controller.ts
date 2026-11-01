import { Controller, Get, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StationsService } from './stations.service';
import { CreateStationDto } from './dtos/create-station.dto';

@ApiTags('Estaciones Físicas')
@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una estación física de juego' })
  create(@Body() dto: CreateStationDto) {
    return this.stationsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las estaciones' })
  findAll() {
    return this.stationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una estación por ID' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stationsService.findOne(id);
  }
}
