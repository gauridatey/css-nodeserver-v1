const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/index');
require('./src/shared/dbconfig');

const app = express();

// cors options
app.options('*', cors());
const whitelist = process.env.CORS_WHITELIST.split(',')
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
  }
};
app.use(cors(corsOptions));

// attach main api routes
app.use('/api', apiRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Node server started on: http://${process.env.HOST}:${process.env.PORT}`);
});