// Cierre de caja routes    

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cierreCaja.controller');
const verificarToken = require('../middlewares/authMiddleware');

router.get('/', verificarToken, ctrl.getAll);
router.get('/:id', verificarToken, ctrl.getById);
router.post('/', verificarToken, ctrl.create);
router.put('/:id', verificarToken, ctrl.update);
router.delete('/:id', verificarToken, ctrl.delete);

module.exports = router;