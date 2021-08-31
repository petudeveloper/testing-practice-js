const capitalize = require('../src/task4.js');

describe('Capitalize function', () => {
    test('should return string´s first character capitalized', () => {
        const string = 'hello';

        const capitalLetter = capitalize(string);

        expect(capitalLetter).toBe('Hello');
    })

    test('should throw an error capitalize argument is not a string', () => {
        const input = 123;

        const output = () => capitalize(input);

        expect(output).toThrow('Capitalize only takes a string as an argument');
    })
})