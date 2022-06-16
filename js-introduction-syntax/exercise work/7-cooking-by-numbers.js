function cookingNumberCommands(number, arg2, arg3, arg4, arg5, arg6) {
	let num = Number(number);
	//const args = ['chop', 'dice', 'spice', 'bake', 'fillet'];
	const commands = [arg2, arg3, arg4, arg5, arg6];

	for (let i = 0; i < commands.length; i++) {
		switch (commands[i]) {
			case 'chop': 
				num /= 2;
				console.log(num);
				break;
			case 'dice': 
				num = Math.sqrt(num);;
				console.log(num);
				break;
			case 'spice': 
				num++;
				console.log(num);
				break;
			case 'bake': 
				num *= 3;
				console.log(num);
				break;
			case 'fillet': 
				num -= num * 0.2;
				console.log(num);
				break;
		}
	}
}

cookingNumberCommands('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// output: 16\n8\n4\n2\n1

cookingNumberCommands('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// output: 3\n4\n2\n6\n4.8