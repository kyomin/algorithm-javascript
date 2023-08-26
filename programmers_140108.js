function solution(s) {
	const splitStrings = [];

	while (true) {
		const len = s.length;
		const x = s[0];
		let same = 0;
		let notSame = 0;
		let targetIndex = -1;

		for (let i = 0; i < len; i++) {
			if (x === s[i]) same += 1;
			else notSame += 1;

			if (same === notSame) {
				targetIndex = i;
				break;
			}
		}

		if (targetIndex === -1) {
			splitStrings.push(s);
			break;
		}

		splitStrings.push(s.substr(0, targetIndex + 1));
		s = s.substr(targetIndex + 1, len);

		if (s.length === 0) break;
	}

	return splitStrings.length;
}
