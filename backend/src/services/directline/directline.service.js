// Initializes the `directline` service on path `/directline`
const createService = require('feathers-knex');
const createModel = require('../../models/directline.model');
const hooks = require('./directline.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'directline',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/directline', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('directline');

  service.hooks(hooks);
};
  