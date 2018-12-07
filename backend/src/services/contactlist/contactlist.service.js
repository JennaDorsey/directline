// Initializes the `contactlist` service on path `/contactlist`
const createService = require('feathers-knex');
const createModel = require('../../models/contactlist.model');
const hooks = require('./contactlist.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'contactlist',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contactlist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('contactlist');

  service.hooks(hooks);
};
  