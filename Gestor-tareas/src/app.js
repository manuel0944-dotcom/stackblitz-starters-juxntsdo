const express = require('express');
const cors = require('cors');

const integrantesRoutes = require('./routes/integrantes.routes');
const tareasRoutes = require('./routes/tareas.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mensaje de bienvenida
app.get('/', (req, res) => {
  res.json({ mensaje: 'API del Gestor de Tareas en Equipo activa.' });
});

// Registrar Rutas API
app.use('/integrantes', integrantesRoutes);
app.use('/tareas', tareasRoutes);

module.exports = app;