class CarDealership {
    constructor(name, availableCars, soldCars, totalIncome) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model.length > 0 && horsepower >= 0 && price >= 0 && mileage >= 0) {
            const newCar = { model, horsepower, price, mileage };
            this.availableCars.push(newCar);

            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        } else {
            throw new Error('Invalid input!');
        }
    }

    sellCar(model, desiredMileage) {
        const wantedCar = this.availableCars.find(x => x.model == model);
        if (!wantedCar) {
            throw new Error(`${model} was not found!`);
        }

        if (desiredMileage >= wantedCar.mileage) {
            ;
        } else if (wantedCar.mileage - desiredMileage <= 40000) {
            wantedCar.price *= 0.95;
        } else if (wantedCar.mileage - desiredMileage > 40000) {
            wantedCar.price *= 0.90;
        }

        let horsepower = wantedCar.horsepower;
        let price = wantedCar.price;

        this.soldCars.push({ model, horsepower, price })
        this.totalIncome += price;

        this.availableCars.splice(this.availableCars.indexOf(wantedCar), 1);

        return `${model} was sold for ${price.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            let result = "-Available cars:";

            this.availableCars.forEach(x => {
                result += `\n---${x.model} - ${x.horsepower} HP - ${(x.mileage).toFixed(2)} km - ${(x.price.toFixed(2))}$`;
            });

            return result;
        }
    }

    salesReport(criteria) {
        let sortedCars = [];

        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.price - a.price);
        } else if (criteria == 'model') {
            sortedCars = this.soldCars.sort((a, b) => (a.model).localCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = `-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`;
        result += `\n-${sortedCars.length} cars sold:`;
        sortedCars.forEach(x => {
            result += `\n---${x.model} - ${x.horsepower} HP - ${(x.price).toFixed(2)}$`;
        });

        return result;
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));


// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));