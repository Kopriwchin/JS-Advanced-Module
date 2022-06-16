function validityCheck(x1, y1, x2, y2) {

	function formulaCalc(_x1, _y1, _x2, _y2) {
		const result = Math.sqrt((Math.pow(_x2-_x1, 2))+(Math.pow(_y2-_y1, 2)));
		if (result.toString().includes('.')) {
			console.log(`{${_x1}, ${_y1}} to {${_x2}, ${_y2}} is invalid`);
		} else {
			console.log(`{${_x1}, ${_y1}} to {${_x2}, ${_y2}} is valid`);
		}
	}
		
	formulaCalc(x1, y1, 0, 0);
	formulaCalc(x2, y2, 0, 0);
	formulaCalc(x1, y1, x2, y2);
}

validityCheck(3, 0, 0, 4);
// output:
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

validityCheck(2, 1, 1, 1);
// output:
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid