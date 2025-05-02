// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger');


// Configurar .env
dotenv.config();

// Conectar a MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ API Abarrotes funcionando');
});

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas API
app.use('/api/productos', require('./routes/producto.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/ventas', require('./routes/venta.routes'));
app.use('/api/cierreCaja', require('./routes/cierreCaja.routes'));
app.use('/api/proveedores', require('./routes/proveedor.routes'));



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
