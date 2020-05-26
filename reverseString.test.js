const reverseString = require('./reverseString');

test('Take a string and return it reversed', () =>{
  expect(reverseString('hello')).toBe('olleh');
});

