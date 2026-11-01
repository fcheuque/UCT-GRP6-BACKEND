import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Videogame } from '../../videogames/entities/videogame.entity';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  reportedAt: Date;

  @Column()
  observation: string;

  @Column()
  actionType: string; // Ej: "Reporte de Corrupción", "Mantención"

  // Relación Muchos-a-Uno (Inversa de 1:N)
  @ManyToOne(() => Videogame, (videogame) => videogame.logs, { onDelete: 'CASCADE' })
  videogame: Videogame;
}
