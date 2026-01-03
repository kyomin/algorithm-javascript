function solution(players, callings) {
	var answer = [];
	const obj1 = {};
	const obj2 = {};

	players.forEach((player, index) => {
		obj1[index] = player;
		obj2[player] = index;
	});

	callings.forEach((calling, index) => {
		/**
		 * 호출 선수 이름으로부터 순위를 뽑고,
		 * 앞선 순위로부터 앞선 선수 이름을 뽑는다.
		 */
		const cur_idx = obj2[calling];
		const change = obj1[cur_idx - 1];

		// swap!
		obj1[cur_idx - 1] = calling;
		obj1[cur_idx] = change;
		obj2[calling] = cur_idx - 1;
		obj2[change] = cur_idx;
	});

	// 최종 객체 결과로부터 선수 이름들을 담는다.
	Object.keys(obj1).forEach((key) => {
		answer.push(obj1[key]);
	});

	return answer;
}
