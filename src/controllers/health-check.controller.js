const healthcheckService = require('../services/health-check.service');

const getHealthcheckResponse = async (req, res) => {
  const healthcheck = await healthcheckService.getHealthcheckResponse();
  res.json({ message: res.translate(healthcheck.message) });
};

module.exports = { getHealthcheckResponse };
