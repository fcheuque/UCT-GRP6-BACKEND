// Estructura genérica para respuestas exitosas (Punto 5.2 / 5.5)
export class ApiResponse<T = any> {
  statusCode: number;
  success: boolean;
  message: string;
  timestamp: string;
  data: T | null;
  error?: string;
  errors?: ValidationErrors;

  constructor(
    statusCode: number,
    success: boolean,
    message: string,
    timestamp: string,
    data: T | null = null,
    error?: string,
    errors?: ValidationErrors
  ) {
    this.statusCode = statusCode;
    this.success = success;
    this.message = message;
    this.timestamp = timestamp;
    this.data = data;
    this.error = error;
    this.errors = errors;
  }
}

// Interfaz necesaria para el tipado de los errores de validación de class-validator
export interface ValidationErrors {
  [property: string]: {
    message: string;
  };
}
