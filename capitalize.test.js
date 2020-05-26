const capitalize = require('./capitalize');

test('capitalize string "cody" to "Cody"', () => {
  expect(capitalize("cody")).toBe("Cody");
});