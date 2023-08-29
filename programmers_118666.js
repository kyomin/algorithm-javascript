function solution(survey, choices) {
	const getScore = (score) => {
		switch (score) {
			case 1:
				return 3;
			case 2:
				return 2;
			case 3:
				return 1;
			case 4:
				return 0;
			case 5:
				return 1;
			case 6:
				return 2;
			case 7:
				return 3;
		}
	};
	const typeArr = ['RT', 'CF', 'JM', 'AN'];
	const types = {
		R: 0,
		T: 0,
		C: 0,
		F: 0,
		J: 0,
		M: 0,
		A: 0,
		N: 0,
	};

	let answer = '';

	survey.forEach((indicator, i) => {
		const type1 = indicator[0];
		const type2 = indicator[1];
		const choice = choices[i];

		if (choice >= 1 && choice <= 3) {
			types[type1] += getScore(choice);
		}

		if (choice >= 5 && choice <= 7) {
			types[type2] += getScore(choice);
		}
	});

	for (let i = 0; i < 4; i++) {
		const indicator = typeArr[i];
		const type1 = indicator[0];
		const type2 = indicator[1];
		const score1 = types[type1];
		const score2 = types[type2];

		if (score1 >= score2) answer += type1;
		else answer += type2;
	}

	return answer;
}
