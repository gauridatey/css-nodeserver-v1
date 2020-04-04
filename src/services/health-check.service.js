const healthcheck = require('../models/health-check.model');

const getHealthcheckResponse = () => {
  return healthcheck.findOne();
};

module.exports = {
  getHealthcheckResponse,
};
