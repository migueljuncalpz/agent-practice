const sum = require('../src/sum');

test('suma 1 + 2 y devuelve 3', () => {
  expect(sum(1, 2)).toBe(3);
});
