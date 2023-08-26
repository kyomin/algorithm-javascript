function solution(park, routes) {
	const curPos = [];
	const R = park.length;
	const C = park[0].length;

	for (let r = 0; r < R; r++) {
		let found = false;

		for (let c = 0; c < C; c++) {
			if (park[r][c] === 'S') {
				curPos[0] = r;
				curPos[1] = c;
				found = true;
				break;
			}
		}

		if (found) break;
	}

	routes.forEach((route) => {
		const direction = route[0];
		const num = parseInt(route[2], 10);

		let r = curPos[0];
		let c = curPos[1];
		let isValid = true;

		if (direction === 'E') {
			for (let i = 0; i < num; i++) {
				c += 1;

				if (c >= C || park[r][c] === 'X') {
					isValid = false;
					break;
				}
			}
		} else if (direction === 'W') {
			for (let i = 0; i < num; i++) {
				c -= 1;

				if (c < 0 || park[r][c] === 'X') {
					isValid = false;
					break;
				}
			}
		} else if (direction === 'N') {
			for (let i = 0; i < num; i++) {
				r -= 1;

				if (r < 0 || park[r][c] === 'X') {
					isValid = false;
					break;
				}
			}
		} else if (direction === 'S') {
			for (let i = 0; i < num; i++) {
				r += 1;

				if (r >= R || park[r][c] === 'X') {
					isValid = false;
					break;
				}
			}
		}

		if (isValid) {
			curPos[0] = r;
			curPos[1] = c;
		}
	});

	return curPos;
}
