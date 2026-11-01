# API Rest para la Gestion de Salon de Videojuegos

Este proyecto implementa una API REST para solucionar los problemas de perdida de informacion y desorganizacion derivados del uso de planillas fisicas en un salon de videojuegos. El sistema permite el control de catalogos de juegos, el estado del software (activos, corruptos o dados de baja), el registro de las estaciones de juego fisicas y el historial de bitacoras completado por los encargados.

## Integrantes y Responsabilidades

* Estudiante A: Coordinacion, Documentacion e Integracion
* Estudiante B: Dominio y Datos
* Estudiante C: API y Logica de Negocio
* Estudiante D: Calidad y Pruebas

## Arquitectura por Capas

El backend esta organizado por componentes funcionales (modulos) que encapsulan y dividen internamente sus responsabilidades en cuatro capas tecnicas:

1. Capa de Presentacion (Controllers y DTOs): Responsable de recibir las peticiones HTTP, exponer las rutas del contrato, documentar los esquemas mediante OpenAPI y ejecutar las validaciones de entrada de datos utilizando class-validator.
2. Capa de Aplicacion (Services): Orquestador que coordina los casos de uso, aplica las reglas de negocio y comunica la presentacion con el acceso a los datos.
3. Capa de Dominio (Entities): Define los modelos de negocio puros, sus atributos y restricciones independientes del framework de persistencia.
4. Capa de Infraestructura (Repositories y Database): Implementa la persistencia real de datos mediante el ORM TypeORM conectado a un motor de base de datos SQLite, la carga de datos iniciales y el manejo de esquemas.

### Flujo del Recorrido de una Solicitud

Cuando un cliente realiza una peticion, los datos viajan a traves de los siguientes componentes del backend de forma secuencial:
Peticion HTTP -> Controller (Presentation) -> Service (Application) -> Repository (Infrastructure) -> Base de Datos Real.

## Requisitos Previos

* Node.js v18 o superior
* npm v9 o superior

## Instalacion y Configuracion

1. Clonar el repositorio del proyecto:
git clone https://github.com
cd backend-2026-grupo-06

2. Instalar las dependencias oficiales del sistema:
npm install

3. Configurar las variables de entorno. Para este entorno de desarrollo local con persistencia real, se provee un archivo de ejemplo. Copiar la plantilla para habilitar el entorno de ejecucion:
cp .env.example .env

### Archivo .env.example

PORT=3000
DATABASE_NAME=database.sqlite
NODE_ENV=development

## Inicializacion de Base de Datos y Seeders

El sistema utiliza SQLite como motor de persistencia relacional real. No requiere la ejecucion de comandos de bases de datos externas de forma manual. 

Al arrancar el servidor en modo de desarrollo, el modulo TypeORM verifica la existencia de las tablas y aplica la configuracion automaticamente de forma sincronizada. Posteriormente, el componente DatabaseSeeder inicializa el almacenamiento verificando si existen registros en las tablas. En caso de estar vacias, inserta de manera automatica un minimo de dos registros coherentes por entidad con sus respectivas relaciones uno-a-muchos ya vinculadas para asegurar la reproducibilidad de las pruebas.

## Ejecucion del Proyecto

Para iniciar el servidor de desarrollo en modo observador (watch mode), ejecute el siguiente comando desde la carpeta raiz:
npm run start:dev

El backend estara disponible en la direccion: http://localhost:3000

## Contrato de la API y Documentacion OpenAPI

La API cuenta con la especificacion OpenAPI integrada. El contrato REST interactivo de Swagger puede ser consultado en el navegador de internet a traves del siguiente endpoint con el servidor en ejecucion:

http://localhost:3000/api/docs

### Resumen de Endpoints Principales

Módulo Videojuegos (CRUD Completo):
* POST /videogames - Crear un nuevo videojuego
* GET /videogames - Listar videojuegos con soporte de filtrado, ordenamiento y paginacion
* GET /videogames/:id - Obtener un videojuego por ID unico con sus bitacoras asociadas
* PUT /videogames/:id - Actualizar atributos de un videojuego por ID
* DELETE /videogames/:id - Eliminar un videojuego por ID

Módulo Planillas y Bitacoras (Relacion 1:N con Videojuegos):
* POST /logs - Generar un nuevo registro de bitacora en la planilla digital
* GET /logs - Obtener el historial completo de bitacoras registradas

Módulo Encargados:
* POST /employees - Registrar un nuevo encargado del salon
* GET /employees - Obtener lista de todos los encargados
* GET /employees/:id - Obtener un encargado por su ID

Módulo Estaciones:
* POST /stations - Crear una estacion fisica de juego
* GET /stations - Obtener todas las estaciones del salon
* GET /stations/:id - Obtener una de las estaciones por ID

## Ejecucion de Pruebas Iniciales

Se exigen al menos seis casos de prueba reproducibles para verificar la consistencia del contrato REST y la estabilidad de las reglas de negocio. Estas solicitudes pueden realizarse a traves de clientes HTTP alternativos externos como Postman, Thunder Client o archivos con extension .http.

### Casos Obligatorios a Comprobar

1. Operacion CRUD Completa: Registrar un videojuego con un POST exitoso a /videogames y verificar mediante un GET que los datos ingresados fueron almacenados en la base de datos real.
2. Validacion Invalida (Codigo 422): Enviar un body al endpoint POST /employees con un formato de RUT chileno o correo electronico invalido. El sistema rechazara la operacion antes de consultar la base de datos y retornara la estructura de error estandarizada.
3. Recurso Inexistente (Codigo 404): Realizar una consulta de tipo GET al endpoint /videogames/ utilizando un identificador UUID valido que no corresponda a ningun registro existente en las tablas.
4. Regla de Negocio Bloqueante (Codigo 400): Intentar agregar una bitacora corriente a traves de un POST a /logs asignada a un videojuego cuyo estado previo registrado sea DADO_DE_BAJA sin declarar una accion de tipo Revision Tecnica Especial.
5. Operaciones de Filtro, Orden y Paginacion: Realizar una peticion GET al endpoint estructurado /videogames?status=CORRUPTO&ordenar_por=title&direccion=asc&pagina=1&limite=2. Comprobar que los metadatos de respuesta coinciden con el esquema de conteo de registros y paginas.
6. Persistencia tras Reinicio de la Aplicacion: Detener el proceso del servidor en la terminal mediante Ctrl+C. Volver a arrancar el backend con npm run start:dev y consultar mediante un GET los registros previamente modificados para confirmar que la informacion no sufrio perdidas.
