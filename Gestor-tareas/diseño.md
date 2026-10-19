# Diseño del Sistema: Gestor de Tareas en Equipo

## Modelo de Datos

### Integrante
* `id` (Número, Obligatorio): Identificador único.
* `nombre` (Texto, Obligatorio): Nombre del integrante.
* `correo` (Texto, Obligatorio): Correo electrónico.

### Tarea
* `id` (Número, Obligatorio): Identificador único.
* `titulo` (Texto, Obligatorio): Título descriptivo.
* `descripcion` (Texto, Opcional): Detalle de la tarea.
* `responsableId` (Número, Obligatorio): ID del integrante asignado.
* `estado` (Texto, Obligatorio): Estado actual (`pendiente`, `en progreso` o `hecha`).
* `fechaLimite` (Texto/Fecha, Opcional): Fecha máxima de entrega.

---

## Endpoints de la API

| Método | Ruta | Descripción | Estado HTTP |
| :--- | :--- | :--- | :--- |
| **GET** | `/integrantes` | Obtener la lista de todos los integrantes | `200 OK` |
| **POST** | `/integrantes` | Registrar un nuevo integrante | `201 Created` / `400 Bad Request` |
| **GET** | `/tareas` | Consultar todas las tareas (admite `?estado=` y `?responsableId=`) | `200 OK` |
| **GET** | `/tareas/:id` | Consultar una tarea específica por su ID | `200 OK` / `404 Not Found` |
| **POST** | `/tareas` | Crear una nueva tarea | `201 Created` / `400 Bad Request` |
| **PUT** | `/tareas/:id` | Actualizar los datos de una tarea | `200 OK` / `400` / `404` |
| **DELETE**| `/tareas/:id` | Eliminar una tarea por su ID | `200 OK` / `404 Not Found` |

---

## Arquitectura del Proyecto
```text
src/
├── data/               # Archivos JSON para persistencia de datos
│   ├── integrantes.json
│   └── tareas.json
├── controllers/        # Lógica de negocio y validaciones
│   ├── integrantes.controller.js
│   └── tareas.controller.js
├── routes/             # Definición de las rutas de la API REST
│   ├── integrantes.routes.js
│   └── tareas.routes.js
└── app.js              # Configuración global de Express y Middlewares
index.js                # Punto de entrada y arranque del servidor