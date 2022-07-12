function colorize() {
	//// First solution
    // let tdInTrElements = document.querySelectorAll('tr:nth-of-type(2n) td');
	// tdInTrElements.forEach(element => {
	// 	element.style.backgroundColor = 'teal';
	// }); 
	//// this doesn't work in the judge system due to the unsupported format of NodeList.foreach() (must be parsed to array)

	// Second solution
	let rowElements = document.getElementsByTagName('tr');
	let rows = Array.from(rowElements);

	rows.forEach((x, i) => {
		if (i % 2 != 0) {
			x.style.backgroundColor = 'teal';
		}
	});
}