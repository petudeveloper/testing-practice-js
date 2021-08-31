const stringLength = require('../src/task1.js');

test('Should return the correct lenght', () => {
    string = 'test';

    testFunction = stringLength(string);

    expect(testFunction).toBe(4);
});


test('Should return error if string is empty', () => {
    string = '';

    testFunction = () => stringLength(string);

    expect(testFunction).toThrow('String should at least 1 character long and not longer than 10 characters.');
});

test('Return error if string is larger than 10', () => {
    string = 'Test for check if error is showed when larger than 10';

    testFunction = () => stringLength(string);

    expect(testFunction).toThrow('String should at least 1 character long and not longer than 10 characters.');
});