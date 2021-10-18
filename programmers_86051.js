function solution(numbers) {
	var answer = 0;
	var check = [];

	for (let i = 0; i < 10; i++) {
		check[i] = false;
	}

	numbers.forEach((num) => {
		check[num] = true;
	});

	for (let i = 0; i < 10; i++) {
		if (!check[i]) answer += i;
	}

	return answer;
}
