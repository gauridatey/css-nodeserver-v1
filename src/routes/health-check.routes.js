const express = require('express');
const healthcheckCotroller = require('../controllers/health-check.controller');

const healthcheckRoutes = express.Router();

healthcheckRoutes.get('/', healthcheckCotroller.getHealthcheckResponse);

module.exports = healthcheckRoutes;
