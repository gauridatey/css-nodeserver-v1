const healthcheckService = require('../services/health-check.service');

const getHealthcheckResponse = async (req, res) => {
  const healthcheck = await healthcheckService.getHealthcheckResponse();
  res.json({ message: healthcheck.message });
};

module.exports = { getHealthcheckResponse };
