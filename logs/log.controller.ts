import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LogService } from './log.service';
import { CreateLogDto } from './dtos/create-log.dto';

@ApiTags('Planillas y Bitacoras')
@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  @ApiOperation({ summary: 'Generar un nuevo registro de bitacora' })
  create(@Body() dto: CreateLogDto) {
    return this.logService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las bitacoras' })
  findAll() {
    return this.logService.findAll();
  }
}
