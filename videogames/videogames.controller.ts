import { Controller, Get, Post, Body, Param, Put, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VideogamesService } from './videogames.service';
import { CreateVideogameDto } from './dtos/create-videogame.dto';
import { UpdateVideogameDto } from './dtos/update-videogame.dto';
import { QueryVideogameDto } from './dtos/query-videogame.dto';


@ApiTags('Videojuegos')
@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo videojuego' })
  @ApiResponse({ status: 201, description: 'Recurso creado correctamente.' })
  @ApiResponse({ status: 422, description: 'Los datos no cumplen el esquema o las validaciones.' })
  create(@Body() dto: CreateVideogameDto) {
    return this.videogamesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar colecciones con filtros, orden y paginación (Orden obligatorio: Filtrar -> Ordenar -> Paginar)' })
  @ApiResponse({ status: 200, description: 'Consulta realizada correctamente con metadatos de paginación.' })
  findAll(@Query() query: QueryVideogameDto) {
    return this.videogamesService.findAll(
      query.status,
      query.ordenar_por,
      query.direccion,
      query.pagina,
      query.limite,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un videojuego específico por su ID único' })
  @ApiResponse({ status: 200, description: 'Recurso encontrado con su historial de bitácoras.' })
  @ApiResponse({ status: 404, description: 'El recurso solicitado no existe.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.videogamesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar atributos de un videojuego por ID' })
  @ApiResponse({ status: 200, description: 'Actualización realizada con éxito.' })
  @ApiResponse({ status: 404, description: 'El recurso solicitado no existe.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateVideogameDto,
  ) {
    return this.videogamesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar físicamente un videojuego del catálogo por ID' })
  @ApiResponse({ status: 200, description: 'Eliminación correcta cuando se devuelve contenido.' })
  @ApiResponse({ status: 404, description: 'El recurso solicitado no existe.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.videogamesService.remove(id);
  }
}
