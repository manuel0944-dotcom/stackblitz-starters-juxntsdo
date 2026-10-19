let tareas = require('../data/tareas.json');
const { integrantes } = require('./integrantes.controller');

// Estados válidos según diseño
const ESTADOS_VALIDOS = ['pendiente', 'en progreso', 'hecha'];

// RF2, RF10, RF11: Listar tareas con filtros opcionales (por estado o responsable)
const obtenerTareas = (req, res) => {
  const { estado, responsableId } = req.query;
  let resultado = [...tareas];

  if (estado) {
    resultado = resultado.filter(t => t.estado.toLowerCase() === estado.toLowerCase());
  }

  if (responsableId) {
    resultado = resultado.filter(t => t.responsableId === parseInt(responsableId));
  }

  res.status(200).json(resultado);
};

// RF3: Consultar tarea por ID
const obtenerTareaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }

  res.status(200).json(tarea);
};

// RF1, RF8, RF12: Crear una nueva tarea
const crearTarea = (req, res) => {
  const { titulo, descripcion, responsableId, estado, fechaLimite } = req.body;

  // Validación de campos obligatorios
  if (!titulo || !responsableId || !estado) {
    return res.status(400).json({ error: 'Título, responsableId y estado son campos obligatorios.' });
  }

  // Validación de estado
  if (!ESTADOS_VALIDOS.includes(estado.toLowerCase())) {
    return res.status(400).json({ error: `El estado debe ser uno de los siguientes: ${ESTADOS_VALIDOS.join(', ')}` });
  }

  // Validación de existencia del integrante (RF12)
  const existeIntegrante = integrantes.some(i => i.id === parseInt(responsableId));
  if (!existeIntegrante) {
    return res.status(400).json({ error: 'El responsable asignado no existe en el sistema.' });
  }

  const nuevaTarea = {
    id: tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1,
    titulo,
    descripcion: descripcion || '',
    responsableId: parseInt(responsableId),
    estado: estado.toLowerCase(),
    fechaLimite: fechaLimite || null
  };

  tareas.push(nuevaTarea);
  res.status(201).json({ mensaje: 'Tarea creada exitosamente', tarea: nuevaTarea });
};

// RF4, RF8, RF9: Editar tarea existente
const actualizarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex(t => t.id === id);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }

  const { titulo, descripcion, responsableId, estado, fechaLimite } = req.body;

  if (estado && !ESTADOS_VALIDOS.includes(estado.toLowerCase())) {
    return res.status(400).json({ error: `El estado debe ser uno de los siguientes: ${ESTADOS_VALIDOS.join(', ')}` });
  }

  if (responsableId) {
    const existeIntegrante = integrantes.some(i => i.id === parseInt(responsableId));
    if (!existeIntegrante) {
      return res.status(400).json({ error: 'El responsable asignado no existe.' });
    }
  }

  // Actualización parcial o total
  tareas[tareaIndex] = {
    ...tareas[tareaIndex],
    titulo: titulo !== undefined ? titulo : tareas[tareaIndex].titulo,
    descripcion: descripcion !== undefined ? descripcion : tareas[tareaIndex].descripcion,
    responsableId: responsableId !== undefined ? parseInt(responsableId) : tareas[tareaIndex].responsableId,
    estado: estado !== undefined ? estado.toLowerCase() : tareas[tareaIndex].estado,
    fechaLimite: fechaLimite !== undefined ? fechaLimite : tareas[tareaIndex].fechaLimite
  };

  res.status(200).json({ mensaje: 'Tarea actualizada exitosamente', tarea: tareas[tareaIndex] });
};

// RF5: Eliminar tarea
const eliminarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex(t => t.id === id);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }

  tareas.splice(tareaIndex, 1);
  res.status(200).json({ mensaje: 'Tarea eliminada exitosamente.' });
};

module.exports = {
  obtenerTareas,
  obtenerTareaPorId,
  crearTarea,
  actualizarTarea,
  eliminarTarea
};