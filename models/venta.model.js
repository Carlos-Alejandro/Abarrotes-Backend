const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  productos: [{
    productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    cantidad: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Venta', ventaSchema);
