// venta.routes.js
const express = require('express');
const router = express.Router();
const ventaCtrl = require('../controllers/venta.controller');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas para ventas
router.get('/', verificarToken, ventaCtrl.getAll); // Obtener todas las ventas
router.get('/:id', verificarToken, ventaCtrl.getById); // Obtener una venta por ID
router.post('/', verificarToken, ventaCtrl.create); // Crear una nueva venta
router.put('/:id', verificarToken, ventaCtrl.update); // Actualizar una venta por ID
router.delete('/:id', verificarToken, ventaCtrl.delete); // Eliminar una venta por ID

module.exports = router;