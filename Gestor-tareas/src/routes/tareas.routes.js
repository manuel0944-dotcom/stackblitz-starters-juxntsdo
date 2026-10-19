const express = require('express');
const router = express.Router();
const {
  obtenerTareas,
  obtenerTareaPorId,
  crearTarea,
  actualizarTarea,
  eliminarTarea
} = require('../controllers/tareas.controller');

router.get('/', obtenerTareas);
router.get('/:id', obtenerTareaPorId);
router.post('/', crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

module.exports = router;