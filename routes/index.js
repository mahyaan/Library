const guard = require('../middlewares/guard');


module.exports = (app) => {
  app.use('/', require('./homeRoutes'));
  app.use('/api/v1/user' ,require('./user.routes'));
  app.use('/api/v1/book', require('./book.routes'));
  app.use('/api/v1/auth', require('./auth.Routes'));
  app.use('/api/v1/customer', require('./customer.routes'));

};
