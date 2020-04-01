const mongoose = require('mongoose');

// Set mongoose options
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// DB connection
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

// verification of DB connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is successful ');
});

module.exports = mongoose;
