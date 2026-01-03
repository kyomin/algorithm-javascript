function solution(food) {
	let answer = '';
	let temp = '';

	food.forEach((num, index) => {
		if (num >= 2) {
			const q = Math.floor(num / 2);

			for (let i = 0; i < q; i++) {
				temp += index.toString();
			}
		}
	});

	answer += temp;
	answer += '0';
	temp = temp.split('').reverse().join('');
	answer += temp;

	return answer;
}
