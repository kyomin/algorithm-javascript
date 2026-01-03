function solution(arrayA, arrayB) {
	const isAllDivided = (arr, num) => {
		let flag = true;

		for (let i = 0; i < arr.length; i++) {
			const n = arr[i];

			if (n % num !== 0) {
				flag = false;
				break;
			}
		}

		return flag;
	};
	const isNotAllDivided = (arr, num) => {
		let flag = true;

		for (let i = 0; i < arr.length; i++) {
			const n = arr[i];

			if (n % num === 0) {
				flag = false;
				break;
			}
		}

		return flag;
	};
	const ascent = (a, b) => {
		return a - b;
	};

	let answer = 0;

	arrayA.sort(ascent);
	arrayB.sort(ascent);

	const minA = arrayA[0];
	const minB = arrayB[0];

	// A 최솟값 기준으로 답 찾기
	for (let i = minA; i >= 2; i--) {
		if (
			(isAllDivided(arrayA, i) && isNotAllDivided(arrayB, i)) ||
			(isAllDivided(arrayB, i) && isNotAllDivided(arrayA, i))
		) {
			answer = i;
			break;
		}
	}

	// B 최솟값 기준으로 답 찾기
	for (let i = minB; i >= 2; i--) {
		if (
			(isAllDivided(arrayA, i) && isNotAllDivided(arrayB, i)) ||
			(isAllDivided(arrayB, i) && isNotAllDivided(arrayA, i))
		) {
			answer = Math.max(answer, i);
			break;
		}
	}

	return answer;
}
