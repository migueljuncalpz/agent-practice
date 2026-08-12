const sum = require('../src/sum');
const del = require('../src/del');


test('suma 1 + 2 y devuelve 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('resta 1 - 2 y devuelve -1', () => {
  expect(del(1, 2)).toBe(-1);
});
