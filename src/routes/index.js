const express = require('express');
const swaggerUi = require('swagger-ui-express');
const healthcheckRoutes = require('./health-check.routes');
const swagger = require('../shared/swagger-specs');

const apiRouter = express.Router();

apiRouter.use('/healthcheck', healthcheckRoutes);

/**
 * @swagger
 *
 * /swaggerjson:
 *   get:
 *     description: Swagger specs rendered by jsdoc
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: Swagger specs rendered by jsdoc in JSON format
 *
 */
apiRouter.get('/swaggerjson', (req, res) => res.send(swagger.swaggerSpecs));

// serve and render documentation in html format using specs generated using jsdoc
apiRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger.swaggerSpecs));

module.exports = apiRouter;
