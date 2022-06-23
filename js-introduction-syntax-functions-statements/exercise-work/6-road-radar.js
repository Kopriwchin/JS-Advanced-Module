function determineDrivingLegal(kilometers, area) {
	const areas = ['motorway', 'interstate', 'city', 'residential'];
	const kilometersAllowed = [130, 90, 50, 20];


	const statuses = ['speeding', 'excessive speeding', 'reckless driving'];

	const areaAllowedKm = kilometersAllowed[areas.indexOf(area)];

	if (kilometers <= areaAllowedKm) {
		console.log(`Driving ${kilometers} km/h in a ${areaAllowedKm} zone`);
		return;
	} 
	
	let status;
	const overspeedingKm = kilometers - areaAllowedKm;
	switch (true) {
		case overspeedingKm <= 20:  
			console.log(`The speed is ${overspeedingKm} km/h faster than the allowed speed of ${areaAllowedKm} - ${statuses[0]}`);
			break;
		case overspeedingKm <= 40:
			console.log(`The speed is ${overspeedingKm} km/h faster than the allowed speed of ${areaAllowedKm} - ${statuses[1]}`);
			break;
		default:
			console.log(`The speed is ${overspeedingKm} km/h faster than the allowed speed of ${areaAllowedKm} - ${statuses[2]}`);
			break;
	}
}

determineDrivingLegal(40, 'city');
// Driving 40 km/h in a 50 zone

determineDrivingLegal(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

determineDrivingLegal(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

determineDrivingLegal(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving