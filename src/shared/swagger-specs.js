const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Cynosure Node Base Project',
      version: '1.0.0',
      description: 'API Documentation',
      license: {
        name: 'Cynosure Consultancy',
      },
      contact: {
        name: 'Gauri',
        email: 'gauri.datey2018@gmail.com',
      },
    },
    servers: [
      {
        url: `http://${process.env.HOST}:${process.env.PORT}/api`,
      },
    ],
  },
  apis: ['src/routes/**/*.js'],
};
const swaggerSpecs = swaggerJsdoc(options);

module.exports = { swaggerSpecs };
