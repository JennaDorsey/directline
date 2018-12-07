const users = require('./users/users.service.js');
const tasks = require('./tasks/tasks.service.js');
const notifications = require('./notifications/notifications.service.js');
const contactlist = require('./contactlist/contactlist.service.js');
const admin = require('./admin/admin.service.js');
const directline = require('./directline/directline.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tasks);
  app.configure(notifications);
  app.configure(contactlist);
  app.configure(admin);
  app.configure(directline);
};
