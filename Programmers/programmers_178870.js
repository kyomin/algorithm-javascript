function solution(sequence, k) {
	const result = [];
	let start = 0;
	let end = 0;
	let sum = sequence[0];
	let subLen = sequence.length + 1;

	while (start <= end && end < sequence.length) {
		if (sum < k) {
			sum += sequence[++end];
		} else if (sum === k) {
			// 길이가 더 짧은 수열인 경우
			if (end - start + 1 < subLen) {
				subLen = end - start + 1;

				// 갱신
				result[0] = start;
				result[1] = end;
			}
			// 시작 인덱스가 더 작은 경우
			else if (end - start + 1 === subLen) {
				if (start < result[0]) {
					// 갱신
					result[0] = start;
					result[1] = end;
				}
			}

			sum -= sequence[start++];
		} else {
			sum -= sequence[start++];
		}
	}

	return result;
}
