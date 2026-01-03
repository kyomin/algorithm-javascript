function solution(s) {
	const answer = [];
	const len = s.length;

	for (let i = 0; i < len; i++) {
		const ch = s[i];

		let found = false;
		let cnt = 1;

		for (let j = i - 1; j >= 0; j--) {
			if (s[j] === ch) {
				found = true;
				break;
			}

			cnt++;
		}

		if (found) answer.push(cnt);
		else answer.push(-1);
	}

	return answer;
}
