import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { Log } from './entities/log.entity';
import { VideogamesModule } from '../videogames/videogames.module';

@Module({
  imports: [TypeOrmModule.forFeature([Log]), VideogamesModule],
  controllers: [LogController],
  providers: [LogService],
  exports: [LogService, TypeOrmModule],
})
export class LogModule {}
