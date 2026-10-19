let integrantes = require('../data/integrantes.json');

// RF7: Consultar todos los integrantes
const obtenerIntegrantes = (req, res) => {
  res.status(200).json(integrantes);
};

// RF6: Registrar un nuevo integrante
const crearIntegrante = (req, res) => {
  const { nombre, correo } = req.body;

  // RF12: Validaciones
  if (!nombre || !correo) {
    return res.status(400).json({ error: 'El nombre y el correo electrónico son obligatorios.' });
  }

  const nuevoIntegrante = {
    id: integrantes.length > 0 ? Math.max(...integrantes.map(i => i.id)) + 1 : 1,
    nombre,
    correo
  };

  integrantes.push(nuevoIntegrante);
  res.status(201).json({ mensaje: 'Integrante creado exitosamente', integrante: nuevoIntegrante });
};

module.exports = {
  obtenerIntegrantes,
  crearIntegrante,
  integrantes // Se exporta para verificar existencia de responsables
};