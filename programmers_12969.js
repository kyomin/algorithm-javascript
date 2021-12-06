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
	const arr = input.split(' ');
	const col = arr[0];
	const row = arr[1];

	for (let r = 0; r < row; r++) {
		let stars = '';
		for (let c = 0; c < col; c++) {
			stars += '*';
		}

		console.log(stars);
	}
});
