function solution(t, p) {
	const len_t = t.length;
	const len_p = p.length;
	const end = len_t - len_p;
	let answer = 0;

	for (let start = 0; start <= end; start++) {
		const subStr = t.substr(start, len_p);
		let flag = true;

		for (let i = 0; i < len_p; i++) {
			const a = parseInt(subStr[i], 10);
			const b = parseInt(p[i], 10);

			if (a < b) break;
			else if (a === b) continue;
			else flag = false;
		}

		if (flag) answer++;
	}

	return answer;
}
