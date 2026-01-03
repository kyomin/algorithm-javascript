function solution(cards1, cards2, goal) {
	const q1 = [];
	const q2 = [];
	const q_goal = [];

	let answer = '';
	let turn = 1;
	let flag = true;

	cards1.forEach((card) => {
		q1.push(card);
	});

	cards2.forEach((card) => {
		q2.push(card);
	});

	goal.forEach((g) => {
		q_goal.push(g);
	});

	while (q_goal.length) {
		if (q1[0] !== q_goal[0] && q2[0] !== q_goal[0]) {
			flag = false;
			break;
		}

		if (turn === 1) {
			if (q1[0] === q_goal[0]) {
				q1.shift();
				q_goal.shift();
				continue;
			} else {
				turn = 2;
			}
		} else {
			if (q2[0] === q_goal[0]) {
				q2.shift();
				q_goal.shift();
				continue;
			} else {
				turn = 1;
			}
		}
	}

	if (flag) answer = 'Yes';
	else answer = 'No';

	return answer;
}
