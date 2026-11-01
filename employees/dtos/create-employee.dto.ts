import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail, Matches } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'Sebastián Muñoz' })
  @IsString()
  @Length(3, 80)
  name: string;

  @ApiProperty({ example: '12345678-K' })
  @IsString()
  @Matches(/^[0-9]{7,8}-[0-9Kk]$/, { message: 'El RUT debe tener formato valido con guion' })
  rut: string;

  @ApiProperty({ example: 'Supervisor de Turno' })
  @IsString()
  role: string;

  @ApiProperty({ example: 'smunoz@uct.cl' })
  @IsEmail({}, { message: 'Debe ingresar un correo institucional valido' })
  email: string;
}
