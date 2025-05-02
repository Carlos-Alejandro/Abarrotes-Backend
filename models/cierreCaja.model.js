const mongoose = require('mongoose');

const cierreCajaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  },
  ventasTotales: {
    type: Number,
    required: true
  },
  egresos: {
    type: Number,
    default: 0
  },
  ganancia: {
    type: Number,
    required: true
  },
  efectivo: {
    type: Number,
    default: 0
  },
  tarjeta: {
    type: Number,
    default: 0
  },
  totalProductosVendidos: {
    type: Number,
    default: 0
  },
  observaciones: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('CierreCaja', cierreCajaSchema);
