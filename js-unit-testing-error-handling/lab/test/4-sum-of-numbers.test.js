const assert = require('chai').assert;
const sum = require('../4-sum-of-numbers');

describe('Sum of numbers validator', () => {
    it('Should sum the numbers of the array', () => {
        // Arrange
        let expectedSum = 150;
        let array = [10, 20, 30, 40, 50];

        // Act
        let actualSum = sum(array);

        // Assert
        assert.equal(expectedSum, actualSum);
    });

    it('Should sum the numbers of the array even with negative numbers inside', () => {
        // Arrange
        let expectedSum = 50;
        let array = [10, 20, 30, 40, -50];

        // Act
        let actualSum = sum(array);

        // Assert
        assert.equal(expectedSum, actualSum);
    });

    it('Should return zero when summing only zeros', () => {
        // Arrange
        let expectedSum = 0;
        let array = [0, 0, 0,];

        // Act
        let actualSum = sum(array);

        // Assert
        assert.equal(expectedSum, actualSum);
    });
})