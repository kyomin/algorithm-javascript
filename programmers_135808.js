function solution(k, m, score) {
	const descent = (a, b) => {
		return b - a;
	};
	const len = score.length;

	let answer = 0;

	score.sort(descent);
	for (let i = m - 1; i < len; i += m) {
		const num = score[i];
		answer += num * m;
	}

	return answer;
}
