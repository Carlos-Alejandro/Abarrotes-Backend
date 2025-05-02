const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  productosSuministrados: [{ type: String }],
  ultimaCompra: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('Proveedor', proveedorSchema, 'proveedores');
