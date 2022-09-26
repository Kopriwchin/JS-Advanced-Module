const assert = require('chai').assert;
const carService = require('../03. Unit testing/03. Car Service_Resources');

describe("Tests car service", () => {
    it('Should return correct output based on parameters', () => {
        assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
        assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);

        assert.equal(carService.isItExpensive('somethingElse'), `The overall price will be a bit cheaper`);
    });

    it('Should calculate correct discount', () => {
        assert.equal(carService.discount(3, 100), `Discount applied! You saved ${(15 / 100) * 100}$`);
        assert.equal(carService.discount(7, 100), `Discount applied! You saved ${(15 / 100) * 100}$`);
        assert.equal(carService.discount(8, 100), `Discount applied! You saved ${(30 / 100) * 100}$`);
        assert.equal(carService.discount(10, 100), `Discount applied! You saved ${(30 / 100) * 100}$`);

        assert.equal(carService.discount(2, 100), "You cannot apply a discount");
        assert.equal(carService.discount(1, 100), "You cannot apply a discount");
        assert.equal(carService.discount(-5, 100), "You cannot apply a discount");
        
        assert.throw(() => carService.discount('5', 100), 'Invalid input');
        assert.throw(() => carService.discount(5, '100'), 'Invalid input');
        assert.throw(() => carService.discount([5], 100), 'Invalid input');
        assert.throw(() => carService.discount('5', '100'), 'Invalid input');
    });

    it('Should calculate price of needed parts out of the partsCatalog as argument', () => {
        // {part: "engine", price: 1000}
        assert.equal(carService.partsToBuy([], ['engine']), 0);

        assert.throw(() => carService.partsToBuy(5, 10), 'Invalid input');
        assert.throw(() => carService.partsToBuy([{part: "engine", price: 1000}], 10), 'Invalid input');
        assert.throw(() => carService.partsToBuy(5, [{part: "engine", price: 1000}]), 'Invalid input');

        assert.equal(carService.partsToBuy([{part: "engine", price: 1000}, {part: "transmission", price: 300}], ['transmission']), 300);
        assert.equal(carService.partsToBuy([{part: "engine", price: 1000}, {part: "transmission", price: 300}], ['engine']), 1000);
        assert.equal(carService.partsToBuy([{part: "engine", price: 1000}, {part: "transmission", price: 300}], ['engine', 'transmission']), 1300);
        assert.equal(carService.partsToBuy([{part: "engine", price: 1000}, {part: "transmission", price: 300}], ['transmission', 'engine']), 1300);
    })
});
