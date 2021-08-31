const capitalize = require('../modules/task4.js');

describe('Capitalize function', () => {
    test('should return string´s first character capitalized', () => {
        const string = 'hello';

        const capitalLetter = capitalize(string);

        expect(capitalLetter).toBe('Hello');
    })
})