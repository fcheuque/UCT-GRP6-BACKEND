import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Log } from '../../logs/entities/log.entity';

export enum GameStatus {
  ACTIVO = 'ACTIVO',
  CORRUPTO = 'CORRUPTO',
  DADO_DE_BAJA = 'DADO_DE_BAJA'
}

@Entity('videogames')
export class Videogame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  platform: string;

  @Column({ type: 'text', default: GameStatus.ACTIVO })
  status: GameStatus;

  @Column()
  genre: string;

  @OneToMany(() => Log, (log) => log.videogame)
  logs: Log[];
}
