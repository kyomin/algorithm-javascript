function solution(numbers) {
	var answer = '';
	var temp = [];

	function cmp(a, b) {
		if (a + b < b + a) return 1;
		else if (a + b === b + a) return 0;
		else return -1;
	}

	temp = numbers.map((num) => {
		return num + '';
	});

	temp.sort(cmp);

	if (temp[0] === '0') return '0';

	temp.forEach((num) => {
		answer += num;
	});

	return answer;
}
