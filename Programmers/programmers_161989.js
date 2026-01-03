function solution(n, m, section) {
	let answer = 0;
	const wall = new Array(n).fill(true);

	section.forEach((num) => {
		wall[num - 1] = false;
	});

	for (let i = 0; i < n; i++) {
		if (!wall[i]) {
			answer++;

			for (let j = i; j < i + m; j++) {
				if (j >= n) break;

				wall[j] = true;
			}
		}
	}

	return answer;
}
