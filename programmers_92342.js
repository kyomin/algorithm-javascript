function solution(n, info) {
	const answer = new Array(11).fill(0);
	const temp = new Array(11).fill(0);
	let maxDiff = 0;

	// (1 << 10): express 11 bits (all case of ryan)
	for (let subset = 1; subset < 1 << 10; subset++) {
		// each score
		let ryan = 0;
		let apeach = 0;

		// ryan's arrow count
		let cnt = 0;

		for (let i = 0; i < 10; i++) {
			// case of ryan's winning
			if (subset & (1 << i)) {
				ryan += 10 - i;
				temp[i] = info[i] + 1;
				cnt += temp[i];
			}
			// case of apeach's winning
			else {
				temp[i] = 0;
				if (info[i] > 0) apeach += 10 - i;
			}
		}

		if (cnt > n) continue;

		// valid case
		temp[10] = n - cnt;

		if (ryan - apeach === maxDiff) {
			for (let i = 10; i >= 0; i--) {
				if (temp[i] > answer[i]) {
					maxDiff = ryan - apeach;
					answer.splice(0, answer.length, ...temp);
					break;
				} else if (temp[i] < answer[i]) {
					break;
				}
			}
		} else if (ryan - apeach > maxDiff) {
			maxDiff = ryan - apeach;
			answer.splice(0, answer.length, ...temp);
		}
	}

	// case that ryan can't win
	if (maxDiff === 0) return [-1];

	return answer;
}
