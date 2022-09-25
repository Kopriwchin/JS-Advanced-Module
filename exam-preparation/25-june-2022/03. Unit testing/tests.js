const assert = require('chai').assert;
const carService = require('../03. Unit testing/03. Car Service_Resources');

describe("Tests car service", () => {
    it('Should return correct output based on parameters', () => {
        assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
        assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);

        assert.equal(carService.isItExpensive('somethingElse'), `The overall price will be a bit cheaper`);
    });

    // it('Should calculate correct discount', () => {
        
    // })
});
