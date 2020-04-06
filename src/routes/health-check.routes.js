const express = require('express');
const healthcheckCotroller = require('../controllers/health-check.controller');
const errorHandler = require('../shared/error-handler');

const healthcheckRoutes = express.Router();

/**
 * @swagger
 *
 * /healthcheck:
 *   get:
 *     description: Health check API specs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: healthcheck response message
 *
 */
healthcheckRoutes.get('/', errorHandler.handleAsyncError(healthcheckCotroller.getHealthcheckResponse));

module.exports = healthcheckRoutes;
