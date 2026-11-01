import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activación global de cañerías de validación y filtros formateados de error de la UCT
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter());

  // Configuración obligatoria del Contrato OpenAPI / Swagger (Punto 5.2)
  const config = new DocumentBuilder()
    .setTitle('API Salón de Videojuegos - UCT Backend')
    .setDescription('Backend para la gestión de pérdidas de planillas de videojuegos activos y corruptos.')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Levantado en http://localhost:3000/api/docs

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
  console.log('📝 Contrato OpenAPI disponible en http://localhost:3000/api/docs');
}
bootstrap();
