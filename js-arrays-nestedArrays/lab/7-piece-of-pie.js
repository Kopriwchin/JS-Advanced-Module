function solve(arr, startPie, endPie) {
	let array = Array(...arr);
	let startIndex = array.indexOf(startPie);
	let endIndex = array.indexOf(endPie);

	let newArr = array.slice(startIndex, endIndex + 1);
	
	return newArr;
}
solve (['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
// ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']