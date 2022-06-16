function strLength(str1, str2, str3) {
	let sum = str1.length + str2.length + str3.length;
	console.log(sum);
	console.log(Math.floor(sum / 3));
}

strLength('pasta', '5', '22.3');
// output:
// 10
// 3