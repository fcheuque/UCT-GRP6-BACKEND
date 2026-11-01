import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dtos/create-log.dto';

@ApiTags('Planillas y Bitácoras')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  @ApiOperation({ summary: 'Generar un nuevo registro de bitácora en la planilla' })
  create(@Body() dto: CreateLogDto) {
    return this.logsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las bitácoras registradas' })
  findAll() {
    return this.logsService.findAll();
  }
}
