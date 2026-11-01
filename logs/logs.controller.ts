import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LogsService } from './entities/logs.service';

@ApiTags('Planillas y Bitacoras')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  @ApiOperation({ summary: 'Generar un nuevo registro de bitacora' })
  create(@Body() dto: any) {
    return this.logsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las bitacoras' })
  findAll() {
    return this.logsService.findAll();
  }
}
