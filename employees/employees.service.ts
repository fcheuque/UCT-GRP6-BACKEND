import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dtos/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const existing = await this.employeeRepository.findOne({ where: { rut: dto.rut } });
    if (existing) {
      throw new ConflictException('Ya existe un encargado registrado con ese RUT');
    }
    const employee: Employee = this.employeeRepository.create({
      name: dto.name,
      rut: dto.rut,
      role: dto.role,
      email: dto.email
    });
    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException('No existe un encargado con el ID solicitado');
    }
    return employee;
  }
}
