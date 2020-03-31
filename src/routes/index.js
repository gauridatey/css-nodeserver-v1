const express = require('express');
const healthcheckRoutes = require('./health-check.routes');

const apiRouter = express.Router();

apiRouter.use('/healthcheck', healthcheckRoutes);

module.exports = apiRouter;
