function solution(numbers) {
	const answer = new Array(numbers.length);
	const st = [];

	for (let i = numbers.length - 1; i >= 0; i--) {
		while (true) {
			if (!st.length) {
				answer[i] = -1;
				break;
			}

			const lastValue = st[st.length - 1];
			if (lastValue > numbers[i]) {
				answer[i] = lastValue;
				break;
			}

			st.pop();
		}

		st.push(numbers[i]);
	}

	return answer;
}
