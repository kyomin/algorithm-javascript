const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';
rl.on('line', function (line) {
	input = line;

	rl.close();
}).on('close', function () {
	let [A, B] = input.split(' ');
	A = Number(A);
	B = Number(B);

	if (A > B) {
		console.log('>');
	} else if (A < B) {
		console.log('<');
	} else {
		console.log('==');
	}
});
