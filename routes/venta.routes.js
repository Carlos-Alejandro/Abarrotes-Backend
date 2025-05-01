const express = require('express');
const router = express.Router();
const ventaCtrl = require('../controllers/venta.controller');
const verificarToken = require('../middlewares/authMiddleware');

router.get('/', verificarToken, ventaCtrl.getVentas);
router.post('/', verificarToken, ventaCtrl.createVenta);

module.exports = router;
