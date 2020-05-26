const calculator = require('./calculator');

test('Add four and five and get nine', () =>{
  expect(calculator.add(4, 5)).toBe(9);
});

test('Subtract nine from three and get six', () =>{
  expect(calculator.subtract(9, 3)).toBe(6);
});

test('Multiply six and nine and get 54', () =>{
  expect(calculator.multiply(6, 9)).toBe(54);
});

test('Divide 12 by 3 and get four', () =>{
  expect(calculator.divide(12, 3)).toBe(4);
});