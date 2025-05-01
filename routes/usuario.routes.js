const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

router.post('/registrar', usuarioCtrl.registrarUsuario);

module.exports = router;
