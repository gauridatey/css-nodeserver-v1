const mongoose = require('mongoose');

const { Schema } = mongoose;

const HealthcheckSchema = new Schema({
  message: String,
});

// Create and Export the model
module.exports = mongoose.model('healthcheck', HealthcheckSchema);
