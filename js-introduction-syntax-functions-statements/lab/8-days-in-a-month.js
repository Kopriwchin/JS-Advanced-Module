function calculateDays(monthNum, year) {
	const date = new Date(year, monthNum, 0).getDate();
	console.log(date);
}

calculateDays('2', '2012');
// output: 29