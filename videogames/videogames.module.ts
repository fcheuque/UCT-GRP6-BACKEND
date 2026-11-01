import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideogamesController } from './videogames.controller';
import { VideogamesService } from './videogames.service';
import { VideogamesRepository } from './videogames.repository';
import { Videogame } from './entities/videogame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videogame])],
  controllers: [VideogamesController],
  providers: [VideogamesService, VideogamesRepository],
  exports: [VideogamesService, VideogamesRepository, TypeOrmModule],
})
export class VideogamesModule {}
