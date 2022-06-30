let car = {
    model: 'BMW',
    year: 2012,
    facelift: true
};

let jsonCar = JSON.stringify(car);

console.log(jsonCar);

let parsedCar = JSON.parse(jsonCar);

console.log(parsedCar.model);