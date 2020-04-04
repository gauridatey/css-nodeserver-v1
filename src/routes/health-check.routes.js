const express = require('express');
const healthcheckCotroller = require('../controllers/health-check.controller');
const errorHandler = require('../shared/error-handler');

const healthcheckRoutes = express.Router();
healthcheckRoutes.get('/', errorHandler.handleAsyncError(healthcheckCotroller.getHealthcheckResponse));

module.exports = healthcheckRoutes;
