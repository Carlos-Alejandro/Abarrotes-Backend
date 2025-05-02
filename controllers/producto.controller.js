const Producto = require('../models/producto.model');
const BaseController = require('./base.controller');

module.exports = new BaseController(Producto);