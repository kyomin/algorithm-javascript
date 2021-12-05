function solution(A) {
	if (A.length === 0) {
		return 0;
	}

	function ascent(a, b) {
		return a - b;
	}

	A.sort(ascent);

	var count = 1;
	var curNum = A[0];

	A.forEach((num) => {
		if (num !== curNum) {
			count++;
			curNum = num;
		}
	});

	return count;
}
