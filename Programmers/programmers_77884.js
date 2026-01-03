function solution(left, right) {
	var answer = 0;

	function calcNumOfFactors(n) {
		let ret = 0;

		for (let i = 2; i <= n / 2; i++) if (n % i == 0) ret += 1;

		return ret;
	}

	for (let i = left; i <= right; i++) {
		if (i == 1) {
			answer -= 1;
			continue;
		}

		let num_of_factors = calcNumOfFactors(i);

		if (num_of_factors % 2 == 0) answer += i;
		else answer -= i;
	}

	return answer;
}
