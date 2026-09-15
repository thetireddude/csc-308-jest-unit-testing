const myFunctions = require('./sample-functions.js');

// test cases for the div() function
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

// test cases for the containsNumbers() function
test('Testing containsNumbers -- string with digits returns true', () => {
        const result = myFunctions.containsNumbers('user123')
        expect(result).toBe(true);
    });

    test('Testing containsNumbers -- string with only letters returns false', () => {
        const result = myFunctions.containsNumbers('abcdef')
        expect(result).toBe(false);
    });

    // this test fails 
    // exposes a bug where the function returns true for a string with spaces but no numbers
    test('Testing containsNumbers -- string with spaces but no digits returns false', () => {
        const result = myFunctions.containsNumbers('hello world')
        expect(result).toBe(false);
    });
