const assert = require('chai').assert;
const lookupChar = require('../3-char-lookup');

describe('Function that retrieves a character at a given index from a passed-in string', () => {
    it('Should check if function works', () => {
        assert.equal(lookupChar('a', 0), 'a')
        assert.equal(lookupChar('abcdefg', 3), 'd');
        assert.equal(lookupChar('abcdefg', 5), 'f');
    });

    it('Should check if the parameters\' types are correct', () => {
        assert.isUndefined(lookupChar(5, 0));
        assert.isUndefined(lookupChar('abcdefgh', '5'));
        assert.isUndefined(lookupChar(1234, '0'));
        assert.isUndefined(lookupChar('abcdefg', 5.5));
    });
    it('Should return \'Incorrent index\' if value of the index is incorrect (bigger than or equal to the string length or a negative number', () => {
        assert.equal(lookupChar('a', 1), 'Incorrect index')
        assert.equal(lookupChar('a', 5), 'Incorrect index')
        assert.equal(lookupChar('abc', -1), 'Incorrect index')
    })
});