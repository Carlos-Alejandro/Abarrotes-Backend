const Cliente = require('../models/cliente.model');
const BaseController = require('./base.controller');

module.exports = new BaseController(Cliente);
