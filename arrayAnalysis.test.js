const arrayAnalysis = require('./arrayAnalysis');

test('Happy path works', () => {
  expect(arrayAnalysis([1,8,3,4,2,6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
});

test('Handles empty array', () => {
  expect(arrayAnalysis([])).toMatchObject({
    average: null,
    min: null,
    max: null,
    length: 0
  })
});