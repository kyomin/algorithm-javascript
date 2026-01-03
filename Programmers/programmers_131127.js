function solution(want, number, discount) {
	const wantLen = want.length;
	const len = discount.length;

	let answer = 0;

	for (let i = 0; i + 10 <= len; i++) {
		const obj = {};

		for (let j = i; j < i + 10; j++) {
			const product = discount[j];

			// 해당 키를 못 찾았다면
			if (obj[product] === undefined) {
				obj[product] = 1; // 등록
			}
			// 해당 키를 찾았다면
			else {
				obj[product] += 1; // 개수 증가
			}
		}

		let flag = true;
		for (let j = 0; j < wantLen; j++) {
			const product = want[j];

			// 할인하는 날이 없는 경우
			if (obj[product] === undefined) {
				flag = false;
				break;
			}

			// 원하는 제품과 수량이 일치하지 않는 경우
			if (obj[product] < number[j]) {
				flag = false;
				break;
			}
		}

		if (flag) answer++;
	}

	return answer;
}
