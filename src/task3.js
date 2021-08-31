class Calculator {
    static add = (...args) => {
        let sum = 0;
        args.forEach( (arg) => sum += arg );
        return sum;
    }

    static subtract = (a, b) => a - b ;

    static multiply = (...args) => {
        let mult = 1;
        args.forEach( (arg) => mult *= arg );
        return mult;
    }
    
    static divide = (a, b) => a / b ;
}

module.exports = Calculator;