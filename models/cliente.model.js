const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String },
  adeudo: { type: Number, default: 0 },
  frecuente: { type: Boolean, default: false },
  fechaRegistro: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cliente', clienteSchema);
