const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
  precioUnitario: Number
});

const ventaSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  productos: [productoSchema],
  total: { type: Number, required: true },
  tipoPago: { type: String, enum: ['Efectivo', 'Tarjeta'], required: true },
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Venta', ventaSchema);
