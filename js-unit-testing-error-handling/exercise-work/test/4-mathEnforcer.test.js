const assert = require('chai').assert;
const mathEnforcer = require('../4-mathEnforcer');

describe('Function that have 3 methods - addFive(), subtractTen(), sum(number1, number2)', () => {
    describe('addFive()', () => {
        it('Should add 5 to the given number', () => {
            assert.equal(mathEnforcer.addFive(10), 15);
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(-10), -5);
            assert.equal(mathEnforcer.addFive(0.01), 0.01 + 5);
            assert.equal(mathEnforcer.addFive(-2.2), -2.2 + 5);
            assert.equal(mathEnforcer.addFive(-5.5), -5.5 + 5);
            
        });
        it('Should return undefined if parameter is not a number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive([5]));
            assert.isUndefined(mathEnforcer.addFive());
        });
    });
    
    describe('subtractTen()', () => {
        it('Should subtract 10 from the given number', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(15), 5);
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(10.001), 10.001 - 10);
            assert.equal(mathEnforcer.subtractTen(-0.1), -0.1 - 10);
            assert.equal(mathEnforcer.subtractTen(5.5), 5.5 - 10);

        });
        it('Should return undefined if parameter is not a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen([5]));
            assert.isUndefined(mathEnforcer.subtractTen());
        });
    });

    describe('sum()', () => {
        it('Should sum the two parameter numbers', () => {
            assert.equal(mathEnforcer.sum(10, 11), 21);
            assert.equal(mathEnforcer.sum(15, -5), 10);
            assert.equal(mathEnforcer.sum(-15, -5), -20);
            assert.equal(mathEnforcer.sum(-15, 5), -10);
            assert.equal(mathEnforcer.sum(0, 0), 0);
            assert.equal(mathEnforcer.sum(0, -5), -5);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.closeTo(mathEnforcer.sum(0.1, 0.1), 0.2, 0.1);
            assert.closeTo(mathEnforcer.sum(-0.2, -0.3), -0.5, 0.1);
            assert.closeTo(mathEnforcer.sum(-0.3, 0.5), 0.2, 0.1);
        });
        it('Should return undefined if parameter is not a number', () => {
            assert.isUndefined(mathEnforcer.sum(1, 'a'));
            assert.isUndefined(mathEnforcer.sum('a', 1));
            assert.isUndefined(mathEnforcer.sum('a', 'b'));
        });
    });
});