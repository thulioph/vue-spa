var App = require('../src/App.vue');

describe('Local Storage', function() {
  beforeAll(function() {
    App.methods.InitApp();
  });

  afterAll(function() {
    localStorage.clear();
  });

  it('Deve ter definido no localStorage o App.', function() {
    expect(localStorage.getItem('App')).toBeDefined();
  });

  it('Deve ter definido no localStorage o App como true.', function() {
    var appValue = localStorage.getItem('App');

    expect(appValue).toBe('true');
  })
});
