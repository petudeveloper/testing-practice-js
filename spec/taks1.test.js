const stringLength = require('../src/task1.js');

test('Return the length of "tests"', () => {
    expect(stringLength("test")).toBe(4);
});
test('Return the length of "task1"', () => {
    expect(stringLength("task1")).toBe(5);
});