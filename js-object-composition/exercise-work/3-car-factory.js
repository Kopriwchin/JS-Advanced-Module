function solve(obj) {
    let resultCar = {};

    let smallEngine = {
        power: 90,
        volume: 1800,
    };
    let normalEngine = {
        power: 120,
        volume: 2400,
    };
    let monsterEngine = {
        power: 200,
        volume: 3500,
    };

    let carriage = {
        type: obj['carriage'],
        color: obj['color']
    };

    let wheels = [0, 0, 0, 0];

    resultCar['model'] = obj['model'];

    if (obj['power'] <= 90) {
        resultCar['engine'] = smallEngine;
    } else if (obj['power'] <= 120) {
        resultCar['engine'] = normalEngine;
    } else {
        resultCar['engine'] = monsterEngine;
    }

    resultCar['carriage'] = carriage;

    if (Number(obj['wheelsize']) % 2 == 0) {
        wheels.fill(Number(obj['wheelsize']) - 1, 0, 4);
    } else {
        wheels.fill(Number(obj['wheelsize']), 0, 4);
    }

    resultCar['wheels'] = wheels;

    return resultCar;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

    
solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });