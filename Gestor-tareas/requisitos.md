# Análisis de Requisitos: Gestor de Tareas en Equipo

## Descripción del Proyecto
El **Gestor de tareas en equipo** es una aplicación web diseñada para facilitar la organización y el seguimiento de las actividades de un equipo de trabajo. Permite registrar tareas, asignarlas a integrantes, modificar su información, actualizar sus estados y consultar actividades mediante filtros.

El backend se desarrolló con Node.js y Express, utilizando una API REST que intercambia datos en formato JSON.

---

## Actores del Sistema
* **Usuario del sistema:** Persona que utiliza la aplicación para administrar las tareas.
* **Integrante del equipo:** Persona registrada que puede ser asignada como responsable de una tarea.

---

## Requisitos Funcionales
* **RF1. Crear tareas:** El sistema debe permitir registrar tareas con título, descripción, responsable, estado y fecha límite.
* **RF2. Listar tareas:** El sistema debe permitir visualizar todas las tareas registradas.
* **RF3. Consultar tareas individuales:** El sistema debe permitir consultar los detalles de una tarea mediante su identificador (`id`).
* **RF4. Editar tareas:** El sistema debe permitir modificar la información de una tarea existente.
* **RF5. Eliminar tareas:** El sistema debe permitir eliminar tareas registradas.
* **RF6. Registrar integrantes:** El sistema debe permitir registrar integrantes con nombre y correo electrónico.
* **RF7. Consultar integrantes:** El sistema debe permitir visualizar la lista de integrantes registrados.
* **RF8. Asignar responsables:** El sistema debe permitir asignar cada tarea a un integrante existente.
* **RF9. Actualizar estados:** El sistema debe permitir cambiar el estado de una tarea entre `pendiente`, `en progreso` y `hecha`.
* **RF10. Filtrar por estado:** El sistema debe permitir consultar las tareas según su estado.
* **RF11. Filtrar por responsable:** El sistema debe permitir consultar las tareas asignadas a un integrante específico.
* **RF12. Validar información:** El sistema debe verificar que los campos obligatorios estén completos y que el responsable asignado exista.

---

## Requisitos No Funcionales
* **RNF1. Intercambio de información:** La API debe utilizar el formato JSON para enviar y recibir datos.
* **RNF2. Validación:** El sistema debe validar los datos recibidos antes de crear o actualizar registros.
* **RNF3. Usabilidad:** La interfaz y las respuestas JSON deben ser claras y fáciles de interpretar.
* **RNF4. Mantenibilidad:** El código debe organizarse en capas (rutas, controladores y datos).
*