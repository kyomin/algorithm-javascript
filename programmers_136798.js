function solution(number, limit, power) {
	const knights = new Array(number);
	const getNumberOfDevisor = (num) => {
		let cnt = 0;

		for (let i = 1; i * i <= num; i++) {
			if (num % i === 0) {
				cnt++;

				if (i * i < num) cnt++;
			}
		}

		return cnt;
	};

	let answer = 0;

	for (let i = 1; i <= number; i++) {
		knights[i - 1] = getNumberOfDevisor(i);
	}

	for (let i = 0; i < number; i++) {
		const knight = knights[i];

		if (knight <= limit) answer += knight;
		else answer += power;
	}

	return answer;
}
