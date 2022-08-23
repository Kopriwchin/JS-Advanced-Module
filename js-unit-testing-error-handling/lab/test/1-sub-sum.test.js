const assert = require('chai').assert;
const solve = require('../1-sub-sum');

describe('Sub-sum Calculator', () => {
    it('Should calculate sub-sum when end index is larger than length', () => {
        // Arrange
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        assert.equal(actualSum, expectedSum);
    });

    it('Should calculate sub-sum when startindex is lower than 0', () => {
        // Arrange
        let expectedSum = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        assert.equal(actualSum, expectedSum);
    });

    it('Should return NaN when non-array is provided for first argument', () => {
        assert.equal(Number.isNaN(solve(10, 0, 1)), true);
        assert.equal(Number.isNaN(solve({}, 0, 1)), true);
        assert.equal(Number.isNaN(solve('10', 0, 1)), true);
        assert.equal(Number.isNaN(solve(null, 0, 1)), true);
    });
})