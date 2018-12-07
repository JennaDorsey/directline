const app = require('../../src/app');

describe('\'contactlist\' service', () => {
  it('registered the service', () => {
    const service = app.service('contactlist');
    expect(service).toBeTruthy();
  });
});
