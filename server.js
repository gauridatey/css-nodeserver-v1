const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./src/routes/index');
const logger = require('./src/shared/logger');
const httplogger = require('./src/shared/httplogger');
const i18n = require('./src/shared/i18n');

require('./src/shared/dbconfig');

const app = express();

// cors options
app.options('*', cors());
const whitelist = process.env.CORS_WHITELIST.split(',');
const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin
    // (like server to server or curl requests)
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};
app.use(cors(corsOptions));

// use winston httplogger along with morgan
app.use(morgan('combined', { stream: httplogger.stream }));

// i18n init
app.use(i18n.init);

// attach main api routes
app.use('/api', apiRoutes);

// handle 404
app.use((req, res) => {
  res.status(404).json({ message: `Route${req.url} Not found.` });
});

// below needs to be at the end of all
app.use((error, req, res, next) => {
  // Any request to this server will get here, and will send an HTTP
  logger.error(`Generic Error: ${error.message}`);
  res.status(500).json({ message: `Generic Error: ${error.message}` });
  next(error);
});

app.listen(process.env.PORT, () => {
  logger.info(`Node server started on: http://${process.env.HOST}:${process.env.PORT}`);
});
