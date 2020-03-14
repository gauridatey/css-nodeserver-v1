const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// cors options
app.options('*', cors());
const whitelist = "http://localhost:4200,http://localhost:5200,http://localhost:6200,";
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


// There are several deprecations in the MongoDB Node.js driver 
// Set mongoose options to fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// DB connection
mongoose.connect(`mongodb://localhost:27017/css-nodeserver`);

// verification of DB connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is successful ');
});
//
const healthcheckSchema = new mongoose.Schema({
  message: String
});

HealtcheckModel = mongoose.model('healthcheck', healthcheckSchema);

app.get('/api/healthcheck', async (req, res) => {
  const healthcheck = await HealtcheckModel.findOne();
  res.json({"message":healthcheck.message});
});

app.listen(3000, () => {
  console.log(`Node server started on port: 3000`);
});
