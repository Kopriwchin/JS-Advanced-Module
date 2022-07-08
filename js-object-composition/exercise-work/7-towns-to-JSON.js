function solve(input) {
	let towns = [];

	for (const line of input) {
		let args = line.split(' | ');
		let town = args[0].substring(2);
		let latitude = Number(args[1]).toFixed(2);
		console.log(latitude);
		let longitude = Number(args[2].slice(0, -2)).toFixed(2);
		console.log(longitude);

		
		let obj = {
			Town: town,
			Latitude: latitude,
			Longitute: longitude
		}
	}
}

solve(['| Town | Latitude | Longitude |',
	'| Sofia | 42.696552 | 23.32601 |',
	'| Beijing | 39.913818 | 116.363625 |'
]);