function solution(name, yearning, photo) {
	const answer = [];
	const obj = {};
	const len = name.length;

	for (let i = 0; i < len; i++) {
		const key = name[i];
		const val = yearning[i];
		obj[key] = val;
	}

	photo.forEach((names) => {
		let score = 0;

		names.forEach((name) => {
			if (obj[name] !== undefined) {
				score += obj[name];
			}
		});

		answer.push(score);
	});

	return answer;
}
