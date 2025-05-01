const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Sistema de Abarrotes',
    version: '1.0.0',
    description: 'Documentación completa del sistema de abarrotes',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],
  tags: [
    { name: 'Clientes', description: 'Operaciones relacionadas con los clientes' },
    { name: 'Productos', description: 'Gestión de productos del sistema' },
    { name: 'Proveedores', description: 'CRUD de proveedores registrados' },
    { name: 'Ventas', description: 'Registro y consulta de ventas' },
    { name: 'CierresCaja', description: 'Cierre de caja diario' },
    { name: 'Usuarios', description: 'Gestión de usuarios registrados' },
    { name: 'Auth', description: 'Inicio de sesión y seguridad' } // ✅ Este es el bueno
  ]  
};

const options = {
  swaggerDefinition,
  apis: [
    path.join(__dirname, './paths/*.js'),
    path.join(__dirname, './schemas/*.js')
  ],
};

module.exports = swaggerJSDoc(options);
