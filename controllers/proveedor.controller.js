// Proveedores controller
const Proveedor = require('../models/proveedor.model');
const BaseController = require('./base.controller');

module.exports = new BaseController(Proveedor);
