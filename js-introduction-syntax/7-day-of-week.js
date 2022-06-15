function dayOfWeekNum(wordWeek) {
	const weeks = ['Monday', 'Tuesday', 'Wednesday',
	'Thursday', 'Friday', 'Saturday', 'Sunday'];

	if (weeks.includes(wordWeek)) {
		console.log(weeks.indexOf(wordWeek) + 1);
	} else {
		console.log('error');
	}
}

dayOfWeekNum('Sunday');
// output: 7