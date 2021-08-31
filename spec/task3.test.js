const Calculator = require('../src/task3.js'); 

describe('Calculator add method', () => {
    test('Should return the sum of 2 numbers', () => {
        const [a, b] = [1, 2];
        
        const addTwoo = Calculator.add(a, b);

        expect(addTwoo).toBe(3);
    })
    test('Should return the sum of many numbers', () => {
        const [a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6];

        const addMany = Calculator.add(a, b, c, d, e, f);

        expect(addMany).toBe(21);
    })
})

describe('Calculator subtract method', () => {
    test('Should return the substraction of 2 numbers', () => {
        const [a, b] = [3, 2];
        
        const subTwo = Calculator.subtract(a, b);

        expect(subTwo).toBe(1);
    })
})

describe('Calculator multiply method', () => {
    test('Should return the multiplication of 2 numbers', () => {
        const [a, b] = [1, 2];
        
        const multiplyTwoo = Calculator.multiply(a, b);

        expect(multiplyTwoo).toBe(2);
    })
    test('Should return the multiplication of many numbers', () => {
        const [a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6];

        const multiplyMany = Calculator.multiply(a, b, c, d, e, f);

        expect(multiplyMany).toBe(720);
    })
})

describe('Calculator divide method', () => {
    test('Should return the division of 2 numbers', () => {
        const [a, b] = [4, 2];
        
        const divTwo = Calculator.divide(a, b);

        expect(divTwo).toBe(2);
    })
})
