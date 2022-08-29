const assert = require('chai').assert;
const isOddOrEven = require('../2-even-or-odd');

describe('Even or odd function tester', () => {
    it('Should return even or odd based upon the given parameter', () => {
        let evenInput = 'iAmEvenInput';
        let oddInput = 'iAmOddInput';

        assert.equal(isOddOrEven(evenInput), 'even');
        assert.equal(isOddOrEven(oddInput), 'odd');
    });

    it('Should return undefined if parameter is NOT a string', () => {
        assert.isUndefined(isOddOrEven(5));
        assert.isUndefined(isOddOrEven());
        assert.isUndefined(isOddOrEven(['even']));
        assert.isUndefined(isOddOrEven({string: 'even'}));
    });
    it('Should work correctly even when multiple strings are given as parameters', () => {
        assert.equal(isOddOrEven('a', 'a'), 'even');
        assert.equal(isOddOrEven('a', 'a', 'a'), 'odd');
    });
});