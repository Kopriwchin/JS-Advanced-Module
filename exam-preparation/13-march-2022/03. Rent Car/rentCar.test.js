const assert = require('chai').assert;
const rentCar = require('../03. Rent Car/rentCar');

describe("Tests car service", () => {
    describe('Should validate searchCar() function', () => {
        it('Throws error if input parameters are invalid', () => {
            assert.throw(() => rentCar.searchCar(5, 'BMW'), "Invalid input!");
            assert.throw(() => rentCar.searchCar('BMW', 'BMW'), "Invalid input!");
            assert.throw(() => rentCar.searchCar('5', 'BMW'), "Invalid input!");
            assert.throw(() => rentCar.searchCar(5, 100), "Invalid input!");
        });
        
        it('Checks whether the submitted string model is present in the shop', () => {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW'), `There is 1 car of model BMW in the catalog!`);

            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "BMW", "Audi"], 'BMW'), `There is 2 car of model BMW in the catalog!`);

            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes'), 'There are no such models in the catalog!');

        });
    })

    describe('Should validate calculatePriceOfCar() function', () => {
        it('Throws error if input parameters are invalid', () => {
            assert.throw(() => rentCar.calculatePriceOfCar([], 0), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', '5'), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(2000, 'BMW'), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(50, 3), 'Invalid input!');
        });
    
        it('Should return the model and the price it will cost for renting a car for the given days', () => {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 2), `You choose BMW and it will cost $90!`);

            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 5), `You choose Volkswagen and it will cost $100!`);

            assert.throw(() => rentCar.calculatePriceOfCar('Hyundai', 10, 'No such model in the catalog!'));
        });
    });

    describe('Should validate checkBudget() function', () => {
        it('Throws error if input parameters are invalid', () => {
            assert.throw(() => rentCar.checkBudget(10), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(10, 20), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget('10', 20, 30), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget('10', '20', 30), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget('10', '50', '100'), 'Invalid input!');
        });
    
        it('Should return the model and the price it will cost for renting a car for the given days', () => {
            assert.equal(rentCar.checkBudget(10, 2, 20), `You rent a car!`);

            assert.equal(rentCar.checkBudget(10, 2, -20), `You need a bigger budget!`);

            assert.equal(rentCar.checkBudget(50, 2, 70), `You need a bigger budget!`);
        });
    });
});