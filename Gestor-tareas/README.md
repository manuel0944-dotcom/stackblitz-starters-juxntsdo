# De la idea al despliegue: Gestor de Tareas en Equipo

**Asignatura:** Programación Aplicada  
**Proyecto:** Gestor de tareas en equipo (Caso 1)  
**Semestre / Momento Evaluativo:** Momento 2 (60 %)

---

## Integrantes del Equipo

* **Estudiante 1:** [manuel 1]
* **Estudiante 2:** [changwi 2]
* **Estudiante 3:** [porre 3]

---

## Descripción del Proyecto

El **Gestor de tareas en equipo** es una aplicación web desarrollada con **Node.js** y **Express** que permite administrar, asignar y realizar el seguimiento de las actividades de un equipo de trabajo mediante una API REST.

### Funcionalidades principales:
* **Gestión de Integrantes:** Registrar y consultar los integrantes del equipo.
* **Gestión de Tareas (CRUD completo):** Crear, listar, consultar por ID, editar y eliminar tareas.
* **Asignación y Estados:** Asignar responsables existentes a cada tarea y actualizar su estado (`pendiente`, `en progreso`, `hecha`).
* **Filtros Dinámicos:** Consultar tareas filtradas por su estado actual o por el responsable asignado.
* **Validación de Datos:** Verificación de campos obligatorios y existencia de responsables antes de procesar las peticiones.

---

## Enlaces del Proyecto

* **Repositorio en GitHub:** [https://github.com/TU_USUARIO/TU_REPOSITORIO](https://github.com/TU_USUARIO/TU_REPOSITORIO)
* **API Publicada en Render:** [https://tu-app-gestor-tareas.onrender.com](https://tu-app-gestor-tareas.onrender.com)

---

## Tecnologías Utilizadas

* **Node.js:** Entorno de ejecución para JavaScript en el servidor.
* **Express.js:** Framework para el desarrollo de la API RESTful.
* **CORS:** Middleware para permitir peticiones desde diferentes orígenes.
* **JSON / fs (File System):** Almacenamiento y gestión de persistencia de datos ligera.
* **StackBlitz:** Entorno de desarrollo en la nube.
* **GitHub:** Control de versiones y colaboración en equipo.
* **Render:** Plataforma de despliegue en la nube para publicar la API.

---

## Estructura del Proyecto

```text
gestor-tareas/
├── src/
│   ├── data/                  # Persistencia de datos en archivos JSON
│   │   ├── integrantes.json
│   │   └── tareas.json
│   ├── controllers/           # Lógica de negocio y validaciones
│   │   ├── integrantes.controller.js
│   │   └── tareas.controller.js
│   ├── routes/                # Enrutamiento de la API REST
│   │   ├── integrantes.routes.js
│   │   └── tareas.routes.js
│   └── app.js                 # Configuración general de Express y middlewares
├── index.js                   # Punto de entrada y arranque del servidor
├── package.json               # Dependencias y scripts
├── requisitos.md              # Documento de análisis de requisitos
├── diseño.md                  # Documento de diseño técnico y arquitectura
├── pruebas.md                 # Evidencias de pruebas de la API
└── README.md                  # Documentación principal del proyecto