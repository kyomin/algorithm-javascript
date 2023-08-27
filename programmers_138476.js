function solution(k, tangerine) {
	const save = {};
	const arr = [];
	const comp = (a, b) => {
		return b[1] - a[1];
	};

	let answer = 0;

	tangerine.forEach((num) => {
		// 기존에 등록된 크기라면 빈도수 증가
		if (save[num] !== undefined) {
			save[num] += 1;
		}
		// 신규 등록
		else {
			save[num] = 1;
		}
	});

	// object 자료형 [key, value] 쌍으로 리스트화
	Object.keys(save).forEach((key) => {
		arr.push([key, save[key]]);
	});

	// value 기준 내림차순 정렬
	arr.sort(comp);

	// 개수가 많은 것부터 선택(서로 다른 크기 종류를 최소화 하기 위함)
	let index = 0;
	while (k > 0) {
		if (k <= arr[index][1]) {
			answer += 1;
			break;
		} else {
			answer += 1;
			k -= arr[index][1];
		}

		index += 1;
	}

	return answer;
}
