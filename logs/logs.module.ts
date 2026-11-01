import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { Log } from './entities/log.entity';
import { VideogamesModule } from '../videogames/videogames.module';

@Module({
  imports: [TypeOrmModule.forFeature([Log]), VideogamesModule],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService, TypeOrmModule],
})
export class LogsModule {}
