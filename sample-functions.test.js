const myFunctions = require('./sample-functions.js');

test('Testing div -- success', () => {
  const target = 6;
  const result = myFunctions.div(30, 5);
  expect(target).toBe(result);
});

