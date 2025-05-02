// routes/producto.routes.js
const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/producto.controller');
const verificarToken = require('../middlewares/authMiddleware');

// Rutas para productos
router.get('/', verificarToken, productoCtrl.getAll); // Obtener todos los productos
router.get('/:id', verificarToken, productoCtrl.getById); // Obtener un producto por ID
router.post('/', verificarToken, productoCtrl.create); // Crear un nuevo producto
router.put('/:id', verificarToken, productoCtrl.update); // Actualizar un producto por ID
router.delete('/:id', verificarToken, productoCtrl.delete); // Eliminar un producto por ID

module.exports = router;