import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  rut: string;

  @Column()
  role: string; // Ej: "Administrador", "Supervisor"

  @Column()
  email: string;
}
