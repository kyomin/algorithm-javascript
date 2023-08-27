// 정수 오름차순 정렬 함수
function ascent(a, b) {
	return a - b;
}

function solution(k, score) {
	const answer = [];
	const rank = [];

	score.forEach((sc) => {
		rank.push(sc);
		rank.sort(ascent);

		if (rank.length <= k) {
			answer.push(rank[0]);
		} else {
			answer.push(rank[rank.length - k]);
		}
	});

	return answer;
}
