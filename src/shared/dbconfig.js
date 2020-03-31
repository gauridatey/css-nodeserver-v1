const mongoose = require('mongoose');

// Set mongoose options
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

module.exports = mongoose;
