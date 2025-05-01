const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'El usuario ya existe' });

    const passwordHash = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: passwordHash,
      rol
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  }
};
