const timeToWords = require('./timeToWord');

describe('#timeToWords', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });

  // test cases to validate the functionality of timeToWords function
  test('converts 00:00 to midnight', () => {
    expect(timeToWords('00:00')).toBe('midnight');
  });

});
