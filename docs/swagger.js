// docs/swagger.js
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
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, './paths/*.js'), path.join(__dirname, './schemas/*.js')],
};

module.exports = swaggerJSDoc(options);
