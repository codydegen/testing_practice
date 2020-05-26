const caesarCipher = require('./caesarCipher');

test('Cipher without any wrapping text', () =>{
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Cipher with wrapping text', () =>{
expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cipher with punctuation', () =>{
expect(caesarCipher('hello!', 1)).toBe('ifmmp!');
});

