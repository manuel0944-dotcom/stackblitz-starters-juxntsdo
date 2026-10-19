const express = require('express');
const router = express.Router();
const { obtenerIntegrantes, crearIntegrante } = require('../controllers/integrantes.controller');

router.get('/', obtenerIntegrantes);
router.post('/', crearIntegrante);

module.exports = router;