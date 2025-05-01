const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String },
  direccion: { type: String },
  correo: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cliente', clienteSchema);
