import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('stations')
export class Station {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string; // Ej: "Cabina Arcade", "Mesa PS5"

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @Column()
  location: string;
}
