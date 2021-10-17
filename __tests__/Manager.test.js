const manager = require("../__tests__/Manager.test.js")

test('manager test', () => {
    const manager = new Manager('health');
  
    expect(manager.role).toBe('manager');
  });