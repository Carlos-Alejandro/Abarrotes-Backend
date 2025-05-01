// controllers/base.controller.js
class BaseController {
    constructor(model) {
      this.model = model;
    }
  
    getAll = async (req, res) => {
      try {
        const data = await this.model.find();
        res.json(data);
      } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener datos', error: err });
      }
    };
  
    getById = async (req, res) => {
      try {
        const item = await this.model.findById(req.params.id);
        if (!item) return res.status(404).json({ mensaje: 'No encontrado' });
        res.json(item);
      } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener recurso', error: err });
      }
    };
  
    create = async (req, res) => {
      try {
        const nuevo = new this.model(req.body);
        await nuevo.save();
        res.status(201).json(nuevo);
      } catch (err) {
        res.status(400).json({ mensaje: 'Error al crear', error: err });
      }
    };
  
    update = async (req, res) => {
      try {
        const actualizado = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ mensaje: 'No encontrado' });
        res.json(actualizado);
      } catch (err) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: err });
      }
    };
  
    delete = async (req, res) => {
      try {
        const eliminado = await this.model.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'No encontrado' });
        res.json({ mensaje: 'Eliminado correctamente' });
      } catch (err) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: err });
      }
    };
  }
  
  module.exports = BaseController;
  