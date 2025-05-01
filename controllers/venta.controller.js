const Venta = require('../models/venta.model');

exports.getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('clienteId').populate('productos.productoId');
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ventas', error });
  }
};

exports.createVenta = async (req, res) => {
  try {
    const nuevaVenta = new Venta(req.body);
    await nuevaVenta.save();
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear venta', error });
  }
};
