const assert = require('chai').assert;
const createCalculator = require('../7-add-subtract');

describe('Add/Subtract higher-order function calculator', () => {
    it('Should return correct value of result (60 + 50 - 10)', () => {
        let calculator = createCalculator();

        calculator.add(60);
        calculator.add(50);
        calculator.subtract(10);

        assert.equal(calculator.get(), 100);
    });

    it('Should accept and convert string as parameter to number', () => {
        let calculator = createCalculator();

        calculator.add('60');
        calculator.add(50);
        calculator.subtract('10');

        assert.equal(calculator.get(), 100);
    });
});