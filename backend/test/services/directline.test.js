const app = require('../../src/app');

describe('\'directline\' service', () => {
  it('registered the service', () => {
    const service = app.service('directline');
    expect(service).toBeTruthy();
  });
});
