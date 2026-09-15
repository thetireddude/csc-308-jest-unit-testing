const myFunctions = require('./sample-functions.js');

test('Testing div -- success', () => {
  const target = 6;
  const result = myFunctions.div(30, 5);
  expect(target).toBe(result);
});

test('Testing div -- negative numbers success', () => {
  const target = -6;
  const result = myFunctions.div(-30, 5);
  expect(target).toBe(result);
});

test('Testing div -- division by zero', () => {
    const result = myFunctions.div(30, 0);
    expect(result).toBe(Infinity);
});

test('Testing div -- division of zero by zero', () => {
    const result = myFunctions.div(0, 0);
    expect(result).toBe(NaN);
});

