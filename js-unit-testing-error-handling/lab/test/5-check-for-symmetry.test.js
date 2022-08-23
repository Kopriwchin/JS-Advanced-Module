const assert = require('chai').assert;
const isSymmetric = require('../5-check-for-symmetry');

describe('Symmetry checker of given array', () => {
    it('Should return true if array is symmetric, otherwise false', () => {
        const symmetricArray = [1, 2, 3, 4, 3, 2, 1];
        const nonSymmetricArray = [1, 2, 3, 4];

        const symmetricStringArray =  ['1', '2', '3', '4', '3', '2', '1'];
        const nonSymmetricStringArray =  ['1', '2', '3', '4', '3'];

        assert.isTrue(isSymmetric(symmetricArray)); 
        assert.isFalse(isSymmetric(nonSymmetricArray));

        assert.isTrue(isSymmetric(symmetricStringArray)); 
        assert.isFalse(isSymmetric(nonSymmetricStringArray));
    });

    it('Should return false if given parameter is a non-array value', () => {
        assert.isFalse(isSymmetric('string'));
        assert.isFalse(isSymmetric(5));
        assert.isFalse(isSymmetric({number: 30}));
        assert.isTrue(isSymmetric([10, 20, 10]));
    });

    it('Should return correct result even if array contains empty elements inside', () => {
        const input = ['10', '20', ' ', '40', ' ', '20', '10'];
        const emptyArray = [];

        assert.isTrue(isSymmetric(input))
        assert.isTrue(isSymmetric(emptyArray))
    });

    it('Should return correct result on mixed input', () => {
        assert.isTrue(isSymmetric([new Date(2012, 6), 2, new Date(2012, 6)]));
        assert.isFalse(isSymmetric(["2", 2]));
    });
});