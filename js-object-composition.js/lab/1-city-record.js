function solve(name, population, treasury) {
	// First way
	// const city = {
	// 	name: name,
	// 	population: population,
	// 	treasury: treasury,
	// }
	
	// Second way
	// let record = {};
	// record.name = name;
	// record.population = population;

	// Third way - shorthand syntax
	let record = {
		name,
		population,
		treasury
	}

	return record
}

solve('Tortuga', 7000, 15000);