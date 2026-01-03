function solution(X, Y) {
	const checkX = new Array(10).fill(0);
	const checkY = new Array(10).fill(0);
	const lenX = X.length;
	const lenY = Y.length;

	let answer = '';

	for (let i = 0; i < lenX; i++) {
		const num = parseInt(X[i], 10);

		checkX[num]++;
	}

	for (let i = 0; i < lenY; i++) {
		const num = parseInt(Y[i], 10);

		checkY[num]++;
	}

	for (let i = 9; i >= 0; i--) {
		if (checkX[i] === 0 || checkY[i] === 0) continue;

		if (checkX[i] < checkY[i]) {
			for (let j = 0; j < checkX[i]; j++) {
				answer += i.toString();
			}
		} else {
			for (let j = 0; j < checkY[i]; j++) {
				answer += i.toString();
			}
		}
	}

	if (answer.length === 0) return '-1';
	else if (answer[0] === '0') return '0';
	else return answer;
}
