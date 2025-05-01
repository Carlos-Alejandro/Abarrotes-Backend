// models/producto.model.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigoBarras: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  categoria: { type: String },
  stock: { type: Number, default: 0 },
  unidad: { type: String },
  imagenUrl: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);
