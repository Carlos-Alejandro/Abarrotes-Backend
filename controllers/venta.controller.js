const Venta = require('../models/venta.model');
const BaseController = require('./base.controller');

class VentaController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Sobrescribir el método update para evitar duplicación de productos
  update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      // Reemplaza completamente los productos para evitar duplicaciones
      const actualizado = await this.model.findByIdAndUpdate(
        id,
        {
          ...data,
          productos: data.productos || [],
          updatedAt: new Date()
        },
        { new: true }
      );

      if (!actualizado) {
        return res.status(404).json({ mensaje: 'Venta no encontrada' });
      }

      res.json(actualizado);
    } catch (err) {
      console.error('[VentaController][update] Error:', err);
      res.status(500).json({ mensaje: 'Error al actualizar la venta', error: err.message });
    }
  };
}

module.exports = new VentaController(Venta);
