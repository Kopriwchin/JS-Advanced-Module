function calculateWalkingTime(numberSteps, lengthFootprintInMeter, velocity) {
	let lengthInKm = (lengthFootprintInMeter * numberSteps) / 1000;

	let minutesRest = Math.floor(lengthInKm * 1000 / 500);

	let timeTakenInMinutes = ((lengthInKm / velocity) * 60) + minutesRest;

	let timeTakenInSeconds = Math.ceil(timeTakenInMinutes * 60);
	
	let hours = Math.floor(timeTakenInSeconds / 3600).toString().padStart(2,'0'),
        minutes = Math.floor(timeTakenInSeconds % 3600 / 60).toString().padStart(2,'0'),
        seconds = Math.floor(timeTakenInSeconds % 60).toString().padStart(2,'0');

	console.log(`${hours}:${minutes}:${seconds}`);
}

calculateWalkingTime(4000, 0.6, 5);
// output: 00:32:48