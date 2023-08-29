function solution(elements) {
	const results = new Set();
	const nums = [];

	for (let i = 0; i < elements.length; i++) {
		nums.push(elements[i]);
	}

	for (let i = 0; i < elements.length - 1; i++) {
		nums.push(elements[i]);
	}

	const pSum = new Array(elements.length * 2);
	pSum[0] = 0;

	for (let i = 0; i < nums.length; i++) {
		pSum[i + 1] = nums[i] + pSum[i];
	}

	for (let len = 1; len <= elements.length; len++) {
		for (let i = 0; i < nums.length; i++) {
			if (i + len >= pSum.length) break;

			results.add(pSum[i + len] - pSum[i]);
		}
	}

	return results.size;
}
