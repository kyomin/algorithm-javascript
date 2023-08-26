function solution(wallpaper) {
	const answer = [];
	const R = wallpaper.length;
	const C = wallpaper[0].length;

	let endLeft = C;
	let endRight = 0;
	let endTop = R;
	let endBottom = 0;

	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			if (wallpaper[r][c] === '#') {
				if (endLeft > c) endLeft = c;
				if (endRight < c) endRight = c;
				if (endTop > r) endTop = r;
				if (endBottom < r) endBottom = r;
			}
		}
	}

	endRight += 1;
	endBottom += 1;

	answer.push(endTop);
	answer.push(endLeft);
	answer.push(endBottom);
	answer.push(endRight);

	return answer;
}
