function solution(keymap, targets) {
	const answer = [];

	targets.forEach((target) => {
		let sum = 0;

		// for .. of문으로 문자열 순회
		for (const targetChar of target) {
			let cnt = -1;

			keymap.forEach((key) => {
				for (let i = 0; i < key.length; i++) {
					if (key[i] === targetChar) {
						const n = i + 1;

						if (cnt === -1 || n < cnt) {
							cnt = n;
							break;
						}
					}
				}
			});

			if (cnt !== -1) sum += cnt;
			else {
				sum = -1;
				break;
			}
		}

		answer.push(sum);
	});

	return answer;
}
