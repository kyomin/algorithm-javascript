function solution(lottos, win_nums) {
	const len = 6;
	var answer = [];
	var num_of_matches = 0;
	var num_of_zero = 0;

	function makeRank(num) {
		var ret;

		switch (num) {
			case 6:
				ret = 1;
				break;
			case 5:
				ret = 2;
				break;
			case 4:
				ret = 3;
				break;
			case 3:
				ret = 4;
				break;
			case 2:
				ret = 5;
				break;
			default:
				ret = 6;
				break;
		}

		return ret;
	}

	function ascent(a, b) {
		return a - b;
	}

	// 계산의 편의를 위해 오름차순 정렬
	lottos.sort(ascent);
	win_nums.sort(ascent);

	for (let i = 0; i < len; i++) {
		let lotto_num = lottos[i];

		if (lotto_num == 0) {
			num_of_zero += 1;
			continue;
		}

		for (let j = 0; j < len; j++) {
			let win_num = win_nums[j];

			if (lotto_num == win_num) num_of_matches += 1;
		}
	}

	answer.push(makeRank(num_of_matches + num_of_zero));
	answer.push(makeRank(num_of_matches));

	return answer;
}
