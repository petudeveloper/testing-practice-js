const reverseString = require('../src/task2.js');

test('Should return reverse string', () => {
    string = 'hello';

    testFunction = reverseString(string);

    expect(testFunction).toBe('olleh');
})