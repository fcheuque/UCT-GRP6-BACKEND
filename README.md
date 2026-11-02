# 🎮 API REST - Gestión de Salón de Videojuegos (UCT)

API REST robusta desarrollada con **NestJS**, **TypeScript** y **TypeORM** utilizando **SQLite** como base de datos. Este sistema está diseñado para la administración integral de un salón de videojuegos, permitiendo gestionar empleados, estaciones de juego, catálogo de videojuegos y registros de auditoría (logs).

---

## 🚀 Características Clave

- **Base de Datos Reproducible:** Cuenta con un sistema de *Seeders* obligatorios que inicializa la base de datos automáticamente con información preconfigurada para demostraciones y defensas académicas.
- **Validación Estricta:** Implementación de `class-validator` y `class-transformer` para asegurar la integridad de los datos entrantes.
- **Documentación Interactiva:** Integración nativa con Swagger para pruebas rápidas de los endpoints.

---

## 📂 Módulos del Sistema

El backend está estructurado de forma modular para facilitar su escalabilidad:
- **`Employees` (`/employees`):** Gestión del personal del salón.
- **`Stations` (`/stations`):** Control de las estaciones/consolas de juego disponibles.
- **`Videogames` (`/videogames`):** Administración del catálogo de videojuegos.
- **`Log` (`/logs`):** Historial de acciones y auditoría del sistema.
- **`Seeder`:** Inicializador automático de datos base obligatorios.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno local:
- [Node.js](https://nodejs.org) (Versión recomendada: v20 o superior)
- npm (incluido con Node.js)

---

## 🔧 Instalación y Configuración

1. **Clonar o abrir el repositorio** en tu entorno local.
2. **Instalar las dependencias** del proyecto ejecutando en la terminal:
   ```bash
   npm install
   ```

---

## 🏃 Ejecución del Proyecto

### 1. Compilación del código (TypeScript a JavaScript)
Antes de iniciar el servidor en producción, genera la carpeta de distribución compilada:
```bash
npm run build
```

### 2. Iniciar el servidor
Levanta la API en modo producción utilizando el archivo compilado:
```bash
npm run start
```

### 3. Modo Desarrollo
Si deseas realizar modificaciones en tiempo real, puedes utilizar el compilador en modo escucha (*watch mode*):
```bash
npm run start:dev
```

El servidor se ejecutará de forma predeterminada en: **`http://localhost:3000`**

---

## 📖 Documentación de la API (Swagger)

Una vez que el servidor esté corriendo, puedes acceder a la documentación interactiva de todos los endpoints, ver los esquemas de datos y realizar peticiones directamente desde el navegador ingresando a:

👉 **`http://localhost:3000/api`** *(o la ruta configurada para Swagger en tu main.ts)*

---

## 🧰 Tecnologías Utilizadas

- **Core:** NestJS v10, TypeScript v5, Node.js
- **Persistencia:** TypeORM, SQLite3
- **Documentación:** Swagger UI (swagger-ui-express)
- **Validación:** Class-validator, Class-transformer
- **Reactividad:** RxJS v7
