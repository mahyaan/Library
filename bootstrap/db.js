// connect to DB Mongoose


/**
 * CONNECT with ODM Mongoose
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BookStore', {useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

module.exports = mongoose;