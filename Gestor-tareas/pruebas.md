# Evidencias de Pruebas de la API: Gestor de Tareas en Equipo

**Proyecto:** Gestor de tareas en equipo (Caso 1)  
**Asignatura:** Programación Aplicada  

En este documento se registran las pruebas realizadas sobre las rutas de la API REST para verificar el cumplimiento de los requisitos funcionales, la correcta validación de datos y el manejo adecuado de errores.

---

## 1. Módulo de Integrantes (`/integrantes`)

### Prueba 1.1: Consultar todos los integrantes (RF7)
* **Método HTTP:** `GET`
* **Ruta:** `/integrantes`
* **Código de respuesta esperado:** `200 OK`
* **Resultado / Respuesta JSON:**
```json
[
  {
    "id": 1,
    "nombre": "Carlos Gómez",
    "correo": "carlos@ejemplo.com"
  },
  {
    "id": 2,
    "nombre": "Ana Martínez",
    "correo": "ana@ejemplo.com"
  }
]