function solution(order) {
	const container = [];
	const size = order.length;

	let now = 0;
	let index = 1;

	while (index !== size + 1) {
		container.push(index);

		while (container.slice(-1)[0] === order[now]) {
			now += 1;
			container.pop();

			if (!container.length) break;
		}

		index += 1;
	}

	return now;
}
