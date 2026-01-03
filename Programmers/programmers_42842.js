function solution(brown, yellow) {
	var answer = [];
	var R, C;
	var outside;

	for (let c = 1; c <= yellow; c++) {
		if (yellow % c == 0) {
			R = yellow / c;
			C = c;
			outside = 2 * R + 2 * (C + 2);

			if (outside == brown) break;
		}
	}

	answer = [R + 2, C + 2];

	return answer;
}
