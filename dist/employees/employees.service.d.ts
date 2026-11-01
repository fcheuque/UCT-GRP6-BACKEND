import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
export declare class EmployeesService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(dto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
}
